const firebaseConfig = {
      apiKey: "AIzaSyByqen64VIJ_vRlH8vEHAggXDazuaeo3hs",
      authDomain: "kwitter-dba57.firebaseapp.com",
      databaseURL: "https://kwitter-dba57-default-rtdb.firebaseio.com",
      projectId: "kwitter-dba57",
      storageBucket: "kwitter-dba57.appspot.com",
      messagingSenderId: "807429542974",
      appId: "1:807429542974:web:cd5041fa338d11bb80ed6f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
