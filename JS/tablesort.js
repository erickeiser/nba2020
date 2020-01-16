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
    
    
    salP = 'sal'
    projP = 'proj'
    posP = 'pos'
    devP = 'dvp'
    rowP = 'rows'
    teamP = 'team'
    oppP = 'opp'
    gameP = 'game'
    minP = 'minutes'
    valP = 'val'
    
   

  // ADD CLASS FOR TEAM LOGO
    if(Team === 'ATL') {
      teamP = 'ATL'
    } else if(Team === 'BOS') {
      teamP = 'BOS'
    } else if(Team === 'BKN') {
      teamP = 'BKN'
    } else if(Team === 'CHA') {
      teamP = 'CHA'
    } else if(Team === 'CHI') {
      teamP = 'CHI'
    } else if(Team === 'CLE') {
      teamP = 'CLE'
    } else if(Team === 'DAL') {
      teamP = 'DAL'
    } else if(Team === 'DEN') {
      teamP = 'DEN'
    } else if(Team === 'DET') {
      teamP = 'DET'
    } else if(Team === 'GSW') {
      teamP = 'GSW'
    } else if(Team === 'HOU') {
      teamP = 'HOU'
    } else if(Team === 'IND') {
      teamP = 'IND'
    } else if(Team === 'LAC') {
      teamP = 'LAC'
    } else if(Team === 'LAL') {
      teamP = 'LAL'
    } else if(Team === 'MEM') {
      teamP = 'MEM'
    } else if(Team === 'MIA') {
      teamP = 'MIA'
    } else if(Team === 'MIL') {
      teamP = 'MIL'
    } else if(Team === 'MIN') {
      teamP = 'MIN'
    } else if(Team === 'NOP') {
      teamP = 'NOP'
    } else if(Team === 'NYK') {
      teamP = 'NYK'
    } else if(Team === 'OKC') {
      teamP = 'OKC'
    } else if(Team === 'ORL') {
      teamP = 'ORL'
    } else if(Team === 'PHI') {
      teamP = 'PHI'
    } else if(Team === 'PHX') {
      teamP = 'PHX'
    } else if(Team === 'POR') {
      teamP = 'POR'
    } else if(Team === 'SAC') {
      teamP = 'SAC'
    } else if(Team === 'SAS') {
      teamP = 'SAS'
    } else if(Team === 'TOR') {
      teamP = 'TOR'
    } else if(Team === 'WAS') {
      teamP = 'WAS'
    } else if(Team === 'UTA'){
      teamP = 'WAS'
    }
    
   
    
    // ADD CLASS FOR OPPONENT LOGO
    if(Opp === 'ATL') {
      oppP = 'ATL'
      
    } else if(Opp === 'BOS') {
      oppP = 'BOS'
    } else if(Opp === 'BKN') {
      oppP = 'BKN'
    } else if(Opp === 'CHA') {
      oppP = 'CHA'
    } else if(Opp === 'CHI') {
      oppP = 'CHI'
    } else if(Opp === 'CLE') {
      oppP = 'CLE'
    } else if(Opp === 'DAL') {
      oppP = 'DAL'
    } else if(Opp === 'DEN') {
      oppP = 'DEN'
    } else if(Opp === 'DET') {
      oppP = 'DET'
    } else if(Opp === 'GSW') {
      oppP = 'GSW'
    } else if(Opp === 'HOU') {
      oppP = 'HOU'
    } else if(Opp === 'IND') {
      oppP = 'IND'
    } else if(Opp === 'LAC') {
      oppP = 'LAC'
    } else if(Opp === 'LAL') {
      oppP = 'LAL'
    } else if(Opp === 'MEM') {
      oppP = 'MEM'
    } else if(Opp === 'MIA') {
      oppP = 'MIA'
    } else if(Opp === 'MIL') {
      oppP = 'MIL'
    } else if(Opp === 'MIN') {
      oppP = 'MIN'
    } else if(Opp === 'NOP') {
      oppP = 'NOP'
    } else if(Opp === 'NYK') {
      oppP = 'NYK'
    } else if(Opp === 'OKC') {
      oppP = 'OKC'
    } else if(Opp === 'ORL') {
      oppP = 'ORL'
    } else if(Opp === 'PHI') {
      oppP = 'PHI'
    } else if(Opp === 'PHX') {
      oppP = 'PHX'
    } else if(Opp === 'POR') {
      oppP = 'POR'
    } else if(Opp === 'SAC') {
      oppP = 'SAC'
    } else if(Opp === 'SAS') {
      oppP = 'SAS'
    } else if(Opp === 'TOR') {
      oppP = 'TOR'
    } else if(Opp === 'WAS') {
      oppP = 'WAS'
    } else if(Opp === 'UTA') {
      oppP = 'UTA'
    }
    // SALARIES
    if(Salary >= 9500) {
      salP = 'high'
    } else if(Salary >= 7500 && Salary <=9499) {
      salP = 'medHigh'
    } else if(Salary >= 6500 && Salary <=7499) {
      salP = 'med'
    } else if(Salary >= 4000 && Salary <= 6499) {
      salP = 'medLow'
    } else if(Salary < 4000) {
      salP = 'low'
    }

    // PROJECTIONS CLASSES
    if(Projection <= 20) {
      projP = 'high'
    } else if(Projection >=21 && Projection <= 28.99) {
      projP = 'medHigh'
    } else if(Projection >= 29 && Projection < 35.99) {
      projP = 'med'
    } else if(Projection >= 36 && Projection <= 45) {
      projP = 'medLow'
    } else {
      projP = 'low'
    }

    if(Value <= 2.9) {
      valP = 'high'
    } else if(Value >= 3 && Value <= 3.9) {
      valP = 'medHigh'
    } else if(Value >= 4 && Value <= 4.9) {
      valP = 'medLow'
    } else if(Value => 5 && Value <= 5.5) {
      valP = 'low'
    }

    //  POSITION FILTER CLASSES
    if(Pos === 'PG') {
      posP = 'pg'
      rowP = 'pg'
    } else if(Pos === 'SG') {
      posP = 'sg'
      rowP = 'sg'
    } else if(Pos === 'SF') {
      posP = 'sf'
      rowP = 'sf'
    } else if(Pos === 'PF') {
      posP = 'pf'
      rowP = 'pf'
    } else {
      posP = 'c'
      rowP = 'c'
    }

    
    $('#all').click(function(){
      $('.sg').show()
      $('.pg').show()
      $('.sf').show()
      $('.pf').show()
      $('.c').show()
    })


    $('#pg').click(function(){
      $('.pg').show()
      $('.sg').hide()
      $('.sf').hide()
      $('.pf').hide()
      $('.c').hide()
    })

    $('#sg').click(function(){
      $('.sg').show()
      $('.pg').hide()
      $('.sf').hide()
      $('.pf').hide()
      $('.c').hide()
    })

    $('#sf').click(function(){
      $('.sf').show()
      $('.pg').hide()
      $('.sg').hide()
      $('.pf').hide()
      $('.c').hide()
    })

    $('#pf').click(function(){
      $('.pf').show()
      $('.pg').hide()
      $('.sg').hide()
      $('.sf').hide()
      $('.c').hide()
    })

    $('#c').click(function(){
      $('.c').show()
      $('.pg').hide()
      $('.sg').hide()
      $('.sf').hide()
      $('.pf').hide()
    })

     //  HIDE PLAYERS WITH 0 PROJECTED MINUTES
     if(pmin <= 0) {
      rowP = 'hide'
    }


    
    
    
  
  
  



   
    


    // RENDER TABLE TO THE DOM
    $("#ex-table").append("<tr class='"+ rowP +"'><td>"+ Player +"</td><td class='"+ posP +"'>" + Pos+ "</td><td class='"+  teamP+"'>" + Team +  "</td>"+ "<td class='"+ gameP + "'>"+ Game +"</td>" +"<td class='"+ oppP +"'>"+ Opp +"</td><td class='" + salP+"'>"+ Salary +"</td><td class='"+ projP +"'>"+ Projection +"</td><td class='"+ devP +"'>"+ dvp +"</td><td>"+ TmTTL +"</td><td>"+ Floor +"</td><td>"+ Ceiling +"</td><td>"+ fppg +"</td><td>"+ fppm +"</td><td>"+ usg +"</td><td>"+ mpg +"</td><td class='"+ minP +"'>"+ pmin +"</td><td class='"+ valP +"'>"+ Value +"</td></tr>")


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






  
  

 