  // Set the configuration for your app
  import firebase from "firebase"
  // TODO: Replace with your project's config object
   var firebaseConfig = {
    apiKey: "AIzaSyDpg6x2qxZYpn1byN9tP9x50k4u_RGYYLs",
    authDomain: "musicast-f3d82.firebaseapp.com",
    databaseURL: "https://musicast-f3d82.firebaseio.com",
    projectId: "musicast-f3d82",
    storageBucket: "musicast-f3d82.appspot.com",
    messagingSenderId: "268492866208",
    appId: "1:268492866208:web:06cbbbd3a98d419d3dffc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var Firebase = firebase.app()
  export default Firebase