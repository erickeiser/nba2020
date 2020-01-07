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
    var Game = snap.child("Game").val()
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
    gameP = 'game'
    minP = 'minutes'
    
    //  HIDE PLAYERS WITH 0 PROJECTED MINUTES
    if(pmin <= 0) {
      rowP = 'hide'
    }

  // ADD CLASS FOR TEAM LOGO
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
    // ADD CLASS FOR OPPONENT LOGO
    if(Opp === 'ATL') {
      oppP = 'atl'
    } else if(Opp === 'BOS') {
      oppP = 'bos'
    } else if(Opp === 'BKN') {
      oppP = 'bkn'
    } else if(Opp === 'CHA') {
      oppP = 'cha'
    } else if(Opp === 'CHI') {
      oppP = 'chi'
    } else if(Opp === 'CLE') {
      oppP = 'cle'
    } else if(Opp === 'DAL') {
      oppP = 'dal'
    } else if(Opp === 'DEN') {
      oppP = 'den'
    } else if(Opp === 'DET') {
      oppP = 'det'
    } else if(Opp === 'GS') {
      oppP = 'gs'
    } else if(Opp === 'HOU') {
      oppP = 'hou'
    } else if(Opp === 'IND') {
      oppP = 'ind'
    } else if(Opp === 'LAC') {
      oppP = 'lac'
    } else if(Opp === 'LAL') {
      oppP = 'lal'
    } else if(Opp === 'MEM') {
      oppP = 'mem'
    } else if(Opp === 'MIA') {
      oppP = 'mia'
    } else if(Opp === 'MIL') {
      oppP = 'mil'
    } else if(Opp === 'MIN') {
      oppP = 'min'
    } else if(Opp === 'NOP') {
      oppP = 'nop'
    } else if(Opp === 'NYK') {
      oppP = 'nyk'
    } else if(Opp === 'OKC') {
      oppP = 'okc'
    } else if(Opp === 'ORL') {
      oppP = 'orl'
    } else if(Opp === 'PHI') {
      oppP = 'phi'
    } else if(Opp === 'PHX') {
      oppP = 'phx'
    } else if(Opp === 'POR') {
      oppP = 'por'
    } else if(Opp === 'SAC') {
      oppP = 'sac'
    } else if(Opp === 'SAN') {
      oppP = 'san'
    } else if(Opp === 'TOR') {
      oppP = 'tor'
    } else if(Opp === 'WAS') {
      oppP = 'was'
    }

    if(Salary > 9500) {
      valP = 'highSal'
    } else if(Salary >= 7500 && Salary <=9499) {
      valP = 'medHigh'
    } else if(Salary >= 6500 && Salary <=7499) {
      valP = 'medSal'
    } else if(Salary >= 4000 && Salary <= 6499) {
      valP = 'medLow'
    } else if(Salary < 4000) {
      valP = 'lowSal'
    }

    




    

    
  

  



   
    


    // RENDER TABLE TO THE DOM
    $("table").append("<tr class='"+ rowP +"'><td>"+ Player +"</td><td>" + Pos+ "</td><td class='"+  teamP+"'>" + Team +  "</td>"+ "<td class='"+ gameP + "'>"+ Game +"</td>" +"<td class='"+ oppP +"'>"+ Opp +"</td><td class='" + valP+"'>"+ Salary +"</td><td class='"+ projP +"'>"+ Projection +"</td><td class='"+ devP +"'>"+ dvp +"</td><td>"+ TmTTL +"</td><td>"+ Floor +"</td><td>"+ Ceiling +"</td><td>"+ fppg +"</td><td>"+ fppm +"</td><td>"+ usg +"</td><td>"+ mpg +"</td><td class='"+ minP +"'>"+ pmin +"</td><td>"+ Value +"</td></tr>")


    // SORT TABLE * THIS IS SET TO [[5,1]] WHIH SORTS THE 5TH COLUMN DESCENDING *
    $(function() {
      $('#ex-table').tablesorter({
        theme: 'blue',
        sortList: [[5,1]]
      })
    })
  })





    // PLAYER SEARCH BOX
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

     //  PAGE REFRESH * 300000 IS FOR 5 MINUTES *
  setTimeout(function(){
    window.location.href = window.location.href;
},300000)

  
  

 