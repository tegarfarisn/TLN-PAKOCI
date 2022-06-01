import { initializeApp } from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyAYjIbcOAGBvC9n046ztAkOf-4YFGOaHYw",
    authDomain: "tlnpakoci.firebaseapp.com",
    projectId: "tlnpakoci",
    storageBucket: "tlnpakoci.appspot.com",
    messagingSenderId: "930437305144",
    appId: "1:930437305144:web:d09cf70653670f9a3267cd"
  };

  // Initialize Firebase
  const firebaseAuthentication = initializeApp(firebaseConfig);

  export default firebaseAuthentication;