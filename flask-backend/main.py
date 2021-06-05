import flask
from chart_engine import get_data
from flask import Flask, jsonify, request
from firebase_admin import db
import pyrebase
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
app = flask.Flask("__main__")

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


app.run(debug = True)
