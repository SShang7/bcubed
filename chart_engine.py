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


RAW_END_DATE = datetime.datetime.now()
INTERVAL = datetime.timedelta(100)
RAW_START_DATE = RAW_END_DATE-INTERVAL
END_DATE = str(RAW_END_DATE.strftime("%Y-%m-%d"))
START_DATE = str(RAW_START_DATE.strftime("%Y-%m-%d"))
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
        exp3 = macd.ewm(span=9, adjust=False).mean()
        macd.plot(label='GOOGL MACD', color='g')
        ax = exp3.plot(label='Signal Line', color='r')
        stock_data.plot(ax=ax, secondary_y=True, label='GOOGL')
    except RemoteDataError:
        print('No data found for {t}'.format(t=ticker))
get_data(STOCK)