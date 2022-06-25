
 const firebaseConfig = {
      apiKey: "AIzaSyBUh7qs5-BT2Bq7owHZQoNmuMwp7XmnaPo",
      authDomain: "kwitter-app-928ad.firebaseapp.com",
      projectId: "kwitter-app-928ad",
      storageBucket: "kwitter-app-928ad.appspot.com",
      messagingSenderId: "17956130752",
      appId: "1:17956130752:web:52c373d888862a8e6b8225",
      measurementId: "G-WQ1STSZ6N4"
    };
  
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

function addRoom() 
{
  room_name = document.getElementById("room_name").Value;

  firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name" 
  });

  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

