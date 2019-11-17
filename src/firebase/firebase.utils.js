import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBTlPOEUEbdo2Tt6Dp726n5ojA7OUEvQd4",
    authDomain: "crwn-clothing-af4d9.firebaseapp.com",
    databaseURL: "https://crwn-clothing-af4d9.firebaseio.com",
    projectId: "crwn-clothing-af4d9",
    storageBucket: "crwn-clothing-af4d9.appspot.com",
    messagingSenderId: "974250829329",
    appId: "1:974250829329:web:5e56611ad1eb0d65f1b3b0"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase