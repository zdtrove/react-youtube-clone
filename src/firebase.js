import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAkrjJ1Jh3HFMGgbSx7tkBJvGYCKh1uyyI",
    authDomain: "react--clone-2.firebaseapp.com",
    projectId: "react--clone-2",
    storageBucket: "react--clone-2.appspot.com",
    messagingSenderId: "755110397121",
    appId: "1:755110397121:web:f80ac33616b29635328040"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()