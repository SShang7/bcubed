
import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCMdjEwurne0SvBdLzsN4MUnOFuDwah-vo",
    authDomain: "auth-development-1e056.firebaseapp.com",
    databaseURL: "https://auth-development-1e056-default-rtdb.firebaseio.com/",
    projectId: "auth-development-1e056",
    storageBucket: "auth-development-1e056.appspot.com",
    messagingSenderId: "729954982605",
    appId: "1:729954982605:web:d523efc16e31ce0164e784"
})


export const auth = app.auth()
export default app
