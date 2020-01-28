import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyC9zpqaWYbRU0pCnFQnWr-d2BNi1QVm0fs",
    authDomain: "bmb101.firebaseapp.com",
    databaseURL: "https://bmb101.firebaseio.com",
});
const database = firebase.database();

export default database;

