import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { getAuth, GoogleAuthProvider , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
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

const user = auth.currentUser;

function updateUserProfile(user){
    const userName=user.displayName;
    const userEmail=user.email;
    const userPhoto=user.photoURL;
    console.log(userEmail);
    document.getElementById("userName").textContent=userName;
    document.getElementById("userEmail").textContent=userEmail;
    document.getElementById("userProfilePicture").src=userPhoto;
}

onAuthStateChanged(auth,(user)=>{
    if(user){
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    }
    else{
        alert("create Account & Login");
    }
});