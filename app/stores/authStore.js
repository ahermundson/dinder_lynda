import { observable, action } from 'mobx'
import firebase from 'firebase'

export default class AuthStore {
  @observable authUser = null

  constructor() {
    firebase.auth.onAuthStateChaned((user) => {
      this.authUser = user;
    })
  }


  @action
  signIn({email,password}) {
    if(this.authUser !== null) {
      return Promise.resolve(this.authUser)
    }
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
}
