// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBse7_HYbByJoURUjuX45h0bvb5d7a3EuY",
  authDomain: "auth-form-2dade.firebaseapp.com",
  projectId: "auth-form-2dade",
  storageBucket: "auth-form-2dade.appspot.com",
  messagingSenderId: "474368438521",
  appId: "1:474368438521:web:27fc78fb4a1e5958003228",
  measurementId: "G-RCCNF70502"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}