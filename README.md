#35LProject
#Running the project locally

#Overview:
The project folder contains two subfolders, flask-backend and frontend_options,
frontend-options contains the actual react-app, while flask-backend contains
the exported JS (flask-backend/static/react).

#Step 1

enter the frontend_options directory and install the necessary dependencies,
we also find that running npm install beforehand resolves many potential issues
(mac and linux users use pip3 or python3 instead of python or pip where seen)
(if any of the pip installs do not run for permission reasons, add --user. For example, "pip install --user pandas_datareader")

 $ cd frontend_options
 $ npm install
 $ npm install react-icons --save
 $ npm install react-dom
 $ npm install react-router-dom
 $ npm install antd
 $ npm install react-bootstrap bootstrap@4.6.0
 $ pip install pandas
 $ pip install numpy
 $ pip install pandas_datareader
 $ pip install matplotlib
 $ pip install firebase_admin
 $ pip install pyrebase
 $ npm install firebase@8.6.3

#Step 2

create the production build by running

$ npm run build

This is placed inside /backend-options/static/react
and can be run from the backend-options folder using a python file


#Step 3

change directories into the flask-backend folder

cd ../flask-backend

#Step 4

start the website using main.py by typing

$ python main.py

#Step 5

Open the server by following the link provided in the console to where your
machine is locally hosting the development server.
