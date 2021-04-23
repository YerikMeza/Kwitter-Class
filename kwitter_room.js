var firebaseConfig = {
       apiKey : "AIzaSyCjfPMPwGQGVit40kYEDV70PB2DfQLlBaE",
       authDomain : "kwitter-practice-2e254.firebaseapp.com",
       databaseURL :"https://kwitter-practice-2e254-default-rtdb.firebaseio.com", 
       projectId : "kwitter-practice-2e254",
       storageBucket : "kwitter-practice-2e254.appspot.com",
       messagingSenderId : "168010427840",
       appId : "1: 168010427840: web: bd4fb1a6984def3e6eec25" };
        // Initialize Firebase
          firebase . initializeApp ( firebaseConfig );

room_name = "";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id=" + Room_names + " onclick= 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html"
}

function addRoom() {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function logout() {
       localStorage.removeItem("room_name");

       localStorage.removeItem("user_name");

       window.location = "index.html";
}