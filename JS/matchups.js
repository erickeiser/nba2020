// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCXADaNvSrnRSRZ4GKMkninSkTZHTDCSAk",
    authDomain: "nbamatchups-df3fa.firebaseapp.com",
    databaseURL: "https://nbamatchups-df3fa.firebaseio.com",
    projectId: "nbamatchups-df3fa",
    storageBucket: "nbamatchups-df3fa.appspot.com",
    messagingSenderId: "200585578316",
    appId: "1:200585578316:web:4a36ac5ec6fc3298adb1e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  // Pulling data from firebase into an HTML table
  var database = firebase.database();
  database.ref().on("child_added", snap =>{
    var Team = snap.child("Team").val()
    var Opp = snap.child("Opp").val()
    var TeamTot = snap.child("TeamTot").val()
    var Spread = snap.child("Spread").val()
    var Pace = snap.child("Pace").val()
    var OppPace = snap.child("OppPace").val()
    var PaceDiff = snap.child("PaceDiff").val()
    var DvpRank = snap.child("DvpRank").val()
    var pg = snap.child("pg").val()
    var sg = snap.child("sg").val()
    var sf = snap.child("sf").val()
    var pf = snap.child("pf").val()
    var c = snap.child("c").val()
    
    teamP = 'team'
    oppP = 'opp'
    SpreadP = 'spread'
    PaceP = 'pace'
    OppPaceP = 'pace'
    PaceDiffP = 'paceDiff'
    DvpRankP = 'dRank'
    pgP = 'pg'
    sgP = 'sg'
    sfP = 'sf'
    pfP = 'pf'
    cP = 'c'
    
   
    
   

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
    } else if(Team === 'NO') {
      teamP = 'no'
    } else if(Team === 'NY') {
      teamP = 'ny'
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
    } else if(Team === 'SA') {
      teamP = 'sa'
    } else if(Team === 'TOR') {
      teamP = 'tor'
    } else if(Team === 'WAS') {
      teamP = 'was'
    } else if(Team === 'UTA'){
      teamP = 'uta'
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
    } else if(Opp === 'NO') {
      oppP = 'no'
    } else if(Opp === 'NY') {
      oppP = 'ny'
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
    } else if(Opp === 'SA') {
      oppP = 'sa'
    } else if(Opp === 'TOR') {
      oppP = 'tor'
    } else if(Opp === 'WAS') {
      oppP = 'was'
    } else if(Opp === 'UTA') {
      oppP = 'uta'
    }

    
    

    if(Spread <= 0) {
        SpreadP = 'darkGreen'
    } else {
        SpreadP = 'darkRed'
    }

    if(Pace < OppPace) {
        PaceP = 'darkGreen'
    } else {
        PaceP = 'darkRed'
    }

    if(OppPace < Pace) {
        OppPaceP = 'darkGreen'
    } else {
        OppPaceP = 'darkRed'
    }

    if(PaceDiff <= 0) {
        PaceDiffP = 'darkRed'
    } else {
        PaceDiffP = 'darkGreen'
    }

    // DVP RANK COLORS
    if(DvpRank >= 1 && DvpRank <= 5) {
        DvpRankP = 'darkRed'
    } else if(DvpRank >= 6 && DvpRank <= 10) {
        DvpRankP = 'lightRed'
    } else if(DvpRank >= 11 && DvpRank <= 15) {
        DvpRankP = 'darkYellow'
    } else if(DvpRank >= 16 && DvpRank <= 20) {
        DvpRankP = 'lightYellow'
    } else if(DvpRank >= 21 && DvpRank <= 25) {
        DvpRankP = 'lightGreen'
    } else {
        DvpRankP = 'darkGreen'
    }

    // POINT GUARD COLORS
    if(pg >= 1 && pg <= 5) {
        pgP = 'darkRed'
    } else if(pg >= 6 && pg <= 10) {
        pgP = 'lightRed'
    } else if(pg >= 11 && pg <= 15) {
        pgP = 'darkYellow'
    } else if(pg >= 16 && pg <= 20) {
        pgP = 'lightYellow'
    } else if(pg >= 21 && pg <= 25) {
        pgP = 'lightGreen'
    } else {
        pgP = 'darkGreen'
    }

    // SHOOT GUARD COLORS
    if(sg >= 1 && sg <= 5) {
        sgP = 'darkRed'
    } else if(sg >= 6 && sg <= 10) {
        sgP = 'lightRed'
    } else if(sg >= 11 && sg <= 15) {
        sgP = 'darkYellow'
    } else if(sg >= 16 && sg <= 20) {
        sgP = 'lightYellow'
    } else if(sg >= 21 && sg <= 25) {
        sgP = 'lightGreen'
    } else {
        sgP = 'darkGreen'
    }

    // SMALL FORWARD COLORS
    if(sf >= 1 && sf <= 5) {
        sfP = 'darkRed'
    } else if(sf >= 6 && sf <= 10) {
        sfP = 'lightRed'
    } else if(sf >= 11 && sf <= 15) {
        sfP = 'darkYellow'
    } else if(sf >= 16 && sf <= 20) {
        sfP = 'lightYellow'
    } else if(sf >= 21 && sf <= 25) {
        sfP = 'lightGreen'
    } else {
        sfP = 'darkGreen'
    }

    // POWER FORWARD COLORS
    if(pf >= 1 && pf <= 5) {
        pfP = 'darkRed'
    } else if(pf >= 6 && pf <= 10) {
        pfP = 'lightRed'
    } else if(pf >= 11 && pf <= 15) {
        pfP = 'darkYellow'
    } else if(pf >= 16 && pf <= 20) {
        pfP = 'lightYellow'
    } else if(pf >= 21 && pf <= 25) {
        pfP = 'lightGreen'
    } else {
        pfP = 'darkGreen'
    }

    // CENTER COLORS
    if(c >= 1 && c <= 5) {
        cP = 'darkRed'
    } else if(c >= 6 && c <= 10) {
        cP = 'lightRed'
    } else if(c >= 11 && c <= 15) {
        cP = 'darkYellow'
    } else if(c >= 16 && c <= 20) {
        cP = 'lightYellow'
    } else if(c >= 21 && c <= 25) {
        cP = 'lightGreen'
    } else {
        cP = 'darkGreen'
    }


   

  

    




    

    
  

  



   
    


    // RENDER TABLE TO THE DOM
    $("table").append("<tr><td class='"+ teamP +"'>"+ Team +"</td><td class='"+ oppP +"'>" + Opp+ "</td><td>" + TeamTot +  "</td><td class='"+ SpreadP +"'>"+ Spread +"</td><td class='"+ PaceP +"'>"+ Pace +"</td><td class='"+ OppPaceP +"'>"+ OppPace +"</td><td class='"+ PaceDiffP +"'>"+ PaceDiff +"</td><td class='"+ DvpRankP +"'>"+ DvpRank +"</td><td class='"+ pgP +"'>"+ pg +"</td><td class='"+ sgP +"'>"+ sg +"</td><td class='"+ sfP +"'>"+ sf +"</td><td class='"+ pfP +"'>"+ pf +"</td><td class='"+ cP +"'>"+ c +"</td></tr>")


    // SORT TABLE * THIS IS SET TO [[5,1]] WHIH SORTS THE 5TH COLUMN DESCENDING *
    $(function() {
      $('#ex-table').tablesorter({
        theme: 'blue',
        sortList: [[2,1]]
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



  
  

 