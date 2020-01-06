  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAxpqmRcAhqBuDnlhE5tjnhQkdJ4rMboBE",
    authDomain: "nbadata-bdb2f.firebaseapp.com",
    databaseURL: "https://nbadata-bdb2f.firebaseio.com",
    projectId: "nbadata-bdb2f",
    storageBucket: "nbadata-bdb2f.appspot.com",
    messagingSenderId: "952246885103",
    appId: "1:952246885103:web:e478ebf03646810ef4d91a",
    measurementId: "G-BPK0L8R3Y8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  // Pulling data from firebase into an HTML table
  var database = firebase.database();
  database.ref().on("child_added", snap =>{
    var Player = snap.child("Player").val()
    var Pos = snap.child("Pos").val()
    var Team = snap.child("Team").val()
    var Opp = snap.child("Opp").val()
    var Salary = snap.child("Salary").val()
    var Projection = snap.child("Projection").val()
    var dvp = snap.child("dvp").val()
    var TmTTL = snap.child("TmTTL").val()
    var Floor = snap.child("Floor").val()
    var Ceiling = snap.child("Ceiling").val()
    var fppg = snap.child("fppg").val()
    var fppm = snap.child("fppm").val()
    var usg = snap.child("usg").val()
    var mpg = snap.child("mpg").val()
    var pmin = snap.child("pmin").val()
    var value = snap.child("value").val()
    
    playerP = 'person'
    valP = 'val'
    projP = 'proj'
    devP = 'dvp'
    rowP = 'rows'


    

    


  



   
    



    $("table").append("<tr class='"+ rowP +"'><td class='"+ playerP +"'>"+ Player +"</td><td>" + Pos+ "</td><td>" + Team + "</td><td>"+ Opp +"</td><td class='" + valP+"'>"+ Salary +"</td><td class='"+ projP +"'>"+ Projection +"</td><td class='"+ devP +"'>"+ dvp +"</td><td>"+ TmTTL +"</td><td>"+ Floor +"</td><td>"+ Ceiling +"</td><td>"+ fppg +"</td><td>"+ fppm +"</td><td>"+ usg +"</td><td>"+ mpg +"</td><td>"+ pmin +"</td><td>"+ value +"</td></tr>")
  })





    // Player search box
    function playerSearch() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("playerSearch");
      filter = input.value.toUpperCase();
      table = document.getElementById("ex-table");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }

     //  Refresh page every 5 minutes 
  setTimeout(function(){
    window.location.href = window.location.href;
},300000)

  
  

 