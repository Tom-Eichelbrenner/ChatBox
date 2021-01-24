import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBIGMOWqHUkQQggj95SUJDqmNxZZL-v64U",
    authDomain: "chatbox-17a79.firebaseapp.com",
    databaseURL: "https://chatbox-17a79-default-rtdb.firebaseio.com",
})
const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base