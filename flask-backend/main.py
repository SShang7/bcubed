import flask
from chart_engine import get_data
from flask import Flask, jsonify, request
from firebase_admin import db
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
def my_index():
    return flask.render_template("index.html", token="Hello FlaskReact")

@app.route("/images")
def grab_data():
    print(request.form)
    
app.run(debug = True)
