import flask
from flask import Flask, jsonify, request
import pyrebase
from pandas_datareader import data
from pandas_datareader._utils import RemoteDataError
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import datetime

config = {
    "apiKey": "AIzaSyCMdjEwurne0SvBdLzsN4MUnOFuDwah-vo",
    "authDomain": "auth-development-1e056.firebaseapp.com",
    "databaseURL": "https://auth-development-1e056-default-rtdb.firebaseio.com/",
    "projectId": "auth-development-1e056",
    "storageBucket": "auth-development-1e056.appspot.com",
    "messagingSenderId": "729954982605",
    "appId": "1:729954982605:web:d523efc16e31ce0164e784"    
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()
storage = firebase.storage()
app = flask.Flask("__main__")

END_DATE = datetime.datetime.now()
INTERVAL = datetime.timedelta(100)
START_DATE = END_DATE-INTERVAL
#STOCK = 'AMD'

    
def get_data(ticker):
    try:
        stock_data = data.get_data_yahoo(ticker, START_DATE, END_DATE)['Adj Close']
        exp1 = stock_data.ewm(span=12, adjust=False).mean()
        exp2 = stock_data.ewm(span=26, adjust=False).mean()
        macd = exp1 - exp2
        signal = macd.ewm(span=9, adjust=False).mean()
        top_bot_cross = []
        bot_top_cross = []
        last_date = macd.index[0]
        # looking for crossovers
        for date, value in macd.items():
            if date == START_DATE:
                continue
            if (macd[last_date] > signal[last_date]) and (signal[date] > macd[date]):
                top_bot_cross.append(date)
            elif (macd[last_date] < signal[last_date]) and (signal[date] < macd[date]):
                bot_top_cross.append(date)
            last_date = date
        if len(top_bot_cross) > 0:
            last_date = top_bot_cross[0]
        bull = []
        bear = []
        
        for date in top_bot_cross:
            if date == top_bot_cross[0]:
                continue
            if (stock_data[last_date] < stock_data[date]) and (macd[last_date]>macd[date]):
                bear.append(date)
            last_date = date
        if len(bot_top_cross) > 0:
            last_date = bot_top_cross[0]
        for date in bot_top_cross:
            if date == bot_top_cross[0]:
                continue
            if (stock_data[last_date] > stock_data[date]) and (macd[last_date]>macd[date]):
                bull.append(date)
            last_date = date
        
        exp3 = macd.ewm(span=9, adjust=False).mean()
        plt.subplot(2, 1, 2)
        ax = exp3.plot(label='Signal Line', color='r')
        macd.plot(ax=ax, label='MACD', color='g')
        plt.subplot(2, 1, 1)
        stock_data.plot(sharex=ax)
        plt.xlabel('Date')
        plt.ylabel('Close Price')
        plt.title(ticker)
        plt.savefig("image.png")
        path_on_cloud = "image.png"
        storage.child(path_on_cloud).put("image.png")
        db.update({"report" : True})
        plt.close()
    except RemoteDataError:
        print('No data found for {t}'.format(t=ticker))
        db.update({"report" : False})

@app.route("/")
@app.route("/home")
@app.route("/aboutus")
@app.route("/dashboard")
@app.route("/forgotpassword")
@app.route("/homehs")
@app.route("/login")
@app.route("/opc")
@app.route("/signup")
@app.route("/towatch")
@app.route("/trends")
@app.route("/updateprofile")
@app.route("/watchlist")
@app.route("/tickers")
@app.route("/tickerimage")

def my_index():
    return flask.render_template("index.html", token="Hello FlaskReact")

@app.route("/imageees")
def plswork():
    ticker = db.child("image").child("ticker").get().val()['ticker']
    try:
        stock_data = data.get_data_yahoo(ticker, START_DATE, END_DATE)['Adj Close']
        exp1 = stock_data.ewm(span=12, adjust=False).mean()
        exp2 = stock_data.ewm(span=26, adjust=False).mean()
        macd = exp1 - exp2
        signal = macd.ewm(span=9, adjust=False).mean()
        top_bot_cross = []
        bot_top_cross = []
        last_date = macd.index[0]
        # looking for crossovers
        for date, value in macd.items():
            if date == START_DATE:
                continue
            if (macd[last_date] > signal[last_date]) and (signal[date] > macd[date]):
                top_bot_cross.append(date)
            elif (macd[last_date] < signal[last_date]) and (signal[date] < macd[date]):
                bot_top_cross.append(date)
            last_date = date
        if len(top_bot_cross) > 0:
            last_date = top_bot_cross[0]
        bull = []
        bear = []
        
        for date in top_bot_cross:
            if date == top_bot_cross[0]:
                continue
            if (stock_data[last_date] < stock_data[date]) and (macd[last_date]>macd[date]):
                bear.append(date)
            last_date = date
        if len(bot_top_cross) > 0:
            last_date = bot_top_cross[0]
        for date in bot_top_cross:
            if date == bot_top_cross[0]:
                continue
            if (stock_data[last_date] > stock_data[date]) and (macd[last_date]>macd[date]):
                bull.append(date)
            last_date = date
        
        exp3 = macd.ewm(span=9, adjust=False).mean()
        plt.subplot(2, 1, 2)
        ax = exp3.plot(label='Signal Line', color='r')
        macd.plot(ax=ax, label='MACD', color='g')
        plt.subplot(2, 1, 1)
        stock_data.plot(sharex=ax)
        plt.xlabel('Date')
        plt.ylabel('Close Price')
        plt.title(ticker)
        plt.savefig("image.png")
        path_on_cloud = "image.png"
        storage.child(path_on_cloud).put("image.png")
        db.update({"report" : True})
        plt.close()
    except RemoteDataError:
        print('No data found for {t}'.format(t=ticker))
        db.update({"report" : False})
    return flask.render_template("index.html", token="Hello FlaskReact")


app.run(debug = True)
