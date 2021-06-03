# -*- coding: utf-8 -*-
"""
Created on Sat Apr 24 18:57:30 2021

@author: sammy
"""

from pandas_datareader import data
from pandas_datareader._utils import RemoteDataError
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import datetime


END_DATE = datetime.datetime.now()
INTERVAL = datetime.timedelta(50)
START_DATE = END_DATE-INTERVAL
STOCK = ['ZM', 'AMC', 'GME']

    
def get_data(ticker):
    try:
        stock_data = data.get_data_yahoo(ticker, START_DATE, END_DATE)['Adj Close']
        #print(stock_data)
        #create_plot(stock_data, 'GOOGL')
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
        last_date = top_bot_cross[0]
        bull = []
        bear = []
        for date in top_bot_cross:
            if date == top_bot_cross[0]:
                continue
            if (stock_data[last_date] < stock_data[date]) and (macd[last_date]>macd[date]):
                bear.append(date)
        last_date = bot_top_cross[0]
        for date in bot_top_cross:
            if date == bot_top_cross[0]:
                continue
            if (stock_data[last_date] > stock_data[date]) and (macd[last_date]>macd[date]):
                bull.append(date)
        print('bull '+ ticker + ': ', bull)
        print('bear '+ ticker + ': ', bear)
        
        exp3 = macd.ewm(span=9, adjust=False).mean()
        plt.subplot(2, 1, 2)
        ax = exp3.plot(label='Signal Line', color='r')
        macd.plot(ax=ax, label='MACD', color='g')
        plt.subplot(2, 1, 1)
        stock_data.plot(sharex=ax)
        plt.xlabel('Date')
        plt.ylabel('Close Price')
        plt.title(ticker)
    except RemoteDataError:
        print('No data found for {t}'.format(t=ticker))
for stock in STOCK:
    get_data(stock)