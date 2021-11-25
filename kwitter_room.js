// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAHGEH0-bTNW9tkmQL-atUElvDCsmC7fw4",
      authDomain: "letschat-3abb5.firebaseapp.com",
      projectId: "letschat-3abb5",
      storageBucket: "letschat-3abb5.appspot.com",
      messagingSenderId: "942412675127",
      appId: "1:942412675127:web:52e4e3f282e5d7e9bd27b2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       



      
      });});}
getData();