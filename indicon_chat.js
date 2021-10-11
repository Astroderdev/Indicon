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

var user_name = localStorage.getItem("Username:");
var room_name = localStorage.getItem("Room:");

function send(){
      msg_input = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg_input,
            like : 0
      });
}

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { 
            childKey  = childSnapshot.key; 
            childData = childSnapshot.val(); 
              if(childKey != "purpose") {
                  firebase_message_id = childKey;
                  message_data = childData;
                  //Start code
                  name = message_data['name'];
                  message = message_data['message'];
                  likes = message_data['like'];
                  console.log("Name: " + name + " Message: " + message + " Likes: " + likes);
                  name_with_tag = "<h4> " + name + "<img src='tick.png' class='user_tick'>  ";
                  msg_with_tag = "<h4 class='message_h4'>  " + message + "</h4>";
                  button_with_tag = "<button id='" + firebase_message_id + "' class='btn btn-info' value='" + likes + "' onclick='updatelikes(this.id)'> ";
                  span_with_tag = "<span class='span_likes' ><i class='fad fa-thumbs-up'></i> Like: " + likes + "</span></button><hr>";
                  row = name_with_tag + msg_with_tag + button_with_tag + span_with_tag ;
                  document.getElementById("output").innerHTML += row ;
                  //End code
      } });  }); }
getData();

function updatelikes(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });

}

function back(){
      window.location = "indicon_room_page.html";
}
