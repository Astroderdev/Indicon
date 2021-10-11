// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQQAN6r6cKvRLwr3dpxgXxOKzBZeDJzgI",
  authDomain: "indicon-54f3b.firebaseapp.com",
  databaseURL: "https://indicon-54f3b-default-rtdb.firebaseio.com",
  projectId: "indicon-54f3b",
  storageBucket: "indicon-54f3b.appspot.com",
  messagingSenderId: "357141900765",
  appId: "1:357141900765:web:46731432e68d7af6c39a34"
};

firebase. initializeApp(firebaseConfig);

username = localStorage.getItem("Username:");
document.getElementById("welcome").innerHTML = "Welcome, " + username + "!";

function getData() { 
  firebase.database().ref("/").on('value', function (snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function (childSnapshot) { 
      childKey = childSnapshot.key;
      Room_names = childKey; 
      //Start code 
       console.log("Room Name - " + Room_names); 
       row = "<div class = 'room_name' id=' " + Room_names + " ' onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr style='color:black;'>"; 
       document.getElementById("output").innerHTML += row; 
  //End code 
   }); }); } 
   getData();

function Addroom() {
  room_name = document.getElementById("addroom").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding_room_name"
  });

  console.log(room_name);
  localStorage.setItem("Room:", room_name);
  window.location = "indicon_chat.html";
}
  
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "indicon_chat.html";
}
function Logoutuser(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}