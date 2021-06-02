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
INTERVAL = datetime.timedelta(100)
START_DATE = END_DATE-INTERVAL
STOCK = 'GOOGL'
def filter_data(stock_data, col):
    weekdays = pd.date_range(start=START_DATE, end=END_DATE)
    clean_data = stock_data[col].reindex(weekdays)
    return clean_data.fillna(method='ffill')
def create_plot(stock_data, ticker):
    plt.subplots(figsize=(15,8))
    plt.plot(stock_data, label=ticker)
    plt.xlabel('Date')
    plt.ylabel('Close Price')
    plt.legend()
    plt.title('Chart Concept')
    plt.savefig('chart_concept.png')
    
def get_data(ticker):
    try:
        stock_data = data.get_data_yahoo("GOOGL", START_DATE, END_DATE)['Adj Close']
        #print(stock_data)
        #create_plot(stock_data, 'GOOGL')
        exp1 = stock_data.ewm(span=12, adjust=False).mean()
        exp2 = stock_data.ewm(span=26, adjust=False).mean()
        macd = exp1 - exp2
        signal = macd.ewm(span=9, adjust=False).mean()
        top_bot_cross = []
        bot_top_cross = []
        last_date = macd.index[0]
        for date, value in macd.items():
            if date == START_DATE:
                continue
            if (macd[last_date] > signal[last_date]) and (signal[date] > macd[date]):
                top_bot_cross.append(date)
            elif (macd[last_date] < signal[last_date]) and (signal[date] < macd[date]):
                bot_top_cross.append(date)
            last_date = date
        print(top_bot_cross)
        print(bot_top_cross)
        macd.plot(label='GOOGL MACD', color='g')
        ax = signal.plot(label='Signal Line', color='r')
        stock_data.plot(ax=ax, secondary_y=True, label='GOOGL')
    except RemoteDataError:
        print('No data found for {t}'.format(t=ticker))
get_data(STOCK)