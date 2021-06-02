import flask

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
def my_index():
    return flask.render_template("index.html", token="Hello FlaskReact")

app.run(debug = True)
