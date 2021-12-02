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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

      }
      
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         
      console.log("Room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      Room_names = childKey;
       user_name = localStorage.getItem("user_name");
       document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

      });});}
getData();

function redirectToRoomName(name){

     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";

}

function logout(){

      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
 
 }
 
 function send(){
 
       msg = document.getElementById("messege").value;
       firebase.database().ref(room_name).push({
             name: user_name,
             messege: msg,
             like:0
       });
 
 }