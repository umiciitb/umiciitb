let firebaseConfig = {
    apiKey: "AIzaSyAiBNZfad7r3YewpcqYjc4ko1u7fd2s9yE",
    authDomain: "iarc-b9c0a.firebaseapp.com",
    projectId: "iarc-b9c0a",
    storageBucket: "iarc-b9c0a.appspot.com",
    messagingSenderId: "513581085766",
    appId: "1:513581085766:web:f72ea8e7e092a55d3c4647",
    measurementId: "G-WN9TB2GJC3"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // firebase.analytics();
  let database = firebase.database()
  
  function startTimer(){
    var counter = 10;
    setInterval(function() {
      counter--;
      if (counter === 0) {
          // alert('sorry, out of time');
          clearInterval(counter);
          database.ref("power").set(0);
      }
    }, 1000);
  }

  function start()
  {
    database.ref("power").set(1)
  //startTimer();
  //alert('wait kar na bhai');
  
    var counter = 20;
  //   database.ref("power").set(2)
    alert('You will be automatically redirected to the simulation page in 20 seconds');
    setInterval(function() {
      counter--;
      if (counter === 0) {
          // alert('sorry, out of time');
          clearInterval(counter);
          database.ref("power").set(0);
        window.open("http://umiciitb.ngrok.io/","_self")
      }
    }, 1000);
//    startTimer();
  };