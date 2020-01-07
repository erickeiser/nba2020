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
    var Value = snap.child("Value").val()
    
    
    valP = 'val'
    projP = 'proj'
    devP = 'dvp'
    rowP = 'rows'
    teamP = 'team'
    oppP = 'opp'
  // add class for player logo
    if(Team === 'ATL') {
      teamP = 'atl'
    } else if(Team === 'BOS') {
      teamP = 'bos'
    } else if(Team === 'BKN') {
      teamP = 'bkn'
    } else if(Team === 'CHA') {
      teamP = 'cha'
    } else if(Team === 'CHI') {
      teamP = 'chi'
    } else if(Team === 'CLE') {
      teamP = 'cle'
    } else if(Team === 'DAL') {
      teamP = 'dal'
    } else if(Team === 'DEN') {
      teamP = 'den'
    } else if(Team === 'DET') {
      teamP = 'det'
    } else if(Team === 'GS') {
      teamP = 'gs'
    } else if(Team === 'HOU') {
      teamP = 'hou'
    } else if(Team === 'IND') {
      teamP = 'ind'
    } else if(Team === 'LAC') {
      teamP = 'lac'
    } else if(Team === 'LAL') {
      teamP = 'lal'
    } else if(Team === 'MEM') {
      teamP = 'mem'
    } else if(Team === 'MIA') {
      teamP = 'mia'
    } else if(Team === 'MIL') {
      teamP = 'mil'
    } else if(Team === 'MIN') {
      teamP = 'min'
    } else if(Team === 'NOP') {
      teamP = 'nop'
    } else if(Team === 'NYK') {
      teamP = 'nyk'
    } else if(Team === 'OKC') {
      teamP = 'okc'
    } else if(Team === 'ORL') {
      teamP = 'orl'
    } else if(Team === 'PHI') {
      teamP = 'phi'
    } else if(Team === 'PHX') {
      teamP = 'phx'
    } else if(Team === 'POR') {
      teamP = 'por'
    } else if(Team === 'SAC') {
      teamP = 'sac'
    } else if(Team === 'SAN') {
      teamP = 'san'
    } else if(Team === 'TOR') {
      teamP = 'tor'
    } else if(Team === 'WAS') {
      teamP = 'was'
    }

    




    

    


  



   
    



    $("table").append("<tr class='"+ rowP +"'><td>"+ Player +"</td><td>" + Pos+ "</td><td class='"+  teamP+"'>" + Team + "</td><td class='"+ oppP +"'>"+ Opp +"</td><td class='" + valP+"'>"+ Salary +"</td><td class='"+ projP +"'>"+ Projection +"</td><td class='"+ devP +"'>"+ dvp +"</td><td>"+ TmTTL +"</td><td>"+ Floor +"</td><td>"+ Ceiling +"</td><td>"+ fppg +"</td><td>"+ fppm +"</td><td>"+ usg +"</td><td>"+ mpg +"</td><td>"+ pmin +"</td><td>"+ Value +"</td></tr>")

    $(function() {
      $('#ex-table').tablesorter({
        theme: 'blue',
        sortList: [[4,1]]
      })
    })
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

  
  

 