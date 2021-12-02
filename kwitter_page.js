// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC9peUgNEe91BhUFyF2Oqa9WvMZTCs9IPE",
      authDomain: "kwitter-42cf7.firebaseapp.com",
      databaseURL: "https://kwitter-42cf7-default-rtdb.firebaseio.com",
      projectId: "kwitter-42cf7",
      storageBucket: "kwitter-42cf7.appspot.com",
      messagingSenderId: "756596448658",
      appId: "1:756596448658:web:7bec116ea436f49d49354b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       
         firebase_message_id = childKey;
         message_data = childData;
         

      } });  }); }
getData();
