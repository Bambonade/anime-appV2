
const firebaseConfig = {
    apiKey: "AIzaSyAcucC6-GcXfy7mOjLuT85f_DI4H0DviKg",
    authDomain: "fir-demo-73f50.firebaseapp.com",
    projectId: "fir-demo-73f50",
    storageBucket: "fir-demo-73f50.appspot.com",
    messagingSenderId: "730471105293",
    appId: "1:730471105293:web:8d6723a6ac52713782a644"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();