import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
    apiKey: "AIzaSyDIimzX1ooOq6V-AphJbvx4srxNiOqt3B8",
    authDomain: "dinder-3d57d.firebaseapp.com",
    databaseURL: "https://dinder-3d57d.firebaseio.com",
    storageBucket: "dinder-3d57d.appspot.com",
    messagingSenderId: "725244009485"
  }

export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get LoginBG() {
    this.loginBG
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}
