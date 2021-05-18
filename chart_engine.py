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
STOCK = 'asdfasdfw'
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
        stock_data = data.DataReader(ticker, 'yahoo', START_DATE, END_DATE)
        stock_data = filter_data(stock_data, 'Adj Close')
        print(stock_data)
        create_plot(stock_data, 'GOOGL')
    except RemoteDataError:
        print('No data found for {t}'.format(t=ticker))
get_data(STOCK)