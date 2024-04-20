// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider , signInWithPopup} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHj-kX9yz5GRnR8JyzqH78GXVbp9H86GE",
  authDomain: "chatboard-88a60.firebaseapp.com",
  databaseURL: "https://chatboard-88a60-default-rtdb.firebaseio.com",
  projectId: "chatboard-88a60",
  storageBucket: "chatboard-88a60.appspot.com",
  messagingSenderId: "849113753871",
  appId: "1:849113753871:web:aef1e022b02239b7a6f67a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("btn");
googleLogin.addEventListener("click",function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log("user",user);
    window.location.href="../loggedin.html";


  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
