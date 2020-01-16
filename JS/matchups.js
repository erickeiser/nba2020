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
    let id = snap.child("id").val()
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

    id = 'id'
    oppId = 'id'
    teamP = 'team'
    teamID = 'team'
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


    // BUTTON SEARCH
    
    
   
    
   

  // ADD CLASS FOR TEAM LOGO
    if(Team === 'ATL') {
      teamP = 'ATL'
      teamID = 'ATL'
      id = 'one'
      
    } else if(Team === 'BOS') {
      teamP = 'BOS'
      teamID = 'BOS'
      id = 'two'
    } else if(Team === 'BKN') {
      teamP = 'BKN'
      teamID = 'BKN'
      id = 'three'
    } else if(Team === 'CHA') {
      teamP = 'CHA'
      teamID = 'CHA'
      id = 'four'
    } else if(Team === 'CHI') {
      teamP = 'CHI'
      teamID = 'CHI'
      id = 'five'
    } else if(Team === 'CLE') {
      teamP = 'CLE'
      teamID = 'CLE'
      id = 'six'
    } else if(Team === 'DAL') {
      teamP = 'DAL'
      teamID = 'DAL'
      id = 'seven'
    } else if(Team === 'DEN') {
      teamP = 'DEN'
      teamID = 'DEN'
      id = 'eight'
    } else if(Team === 'DET') {
      teamP = 'DET'
      teamID = 'DET'
      id = 'nine'
    } else if(Team === 'GS') {
      teamP = 'GS'
      teamID = 'GS'
      id = 'ten'
    } else if(Team === 'HOU') {
      teamP = 'HOU'
      teamID = 'HOU'
      id = 'eleven'
    } else if(Team === 'IND') {
      teamP = 'IND'
      teamID = 'IND'
      id = 'twelve'
    } else if(Team === 'LAC') {
      teamP = 'LAC'
      teamID = 'LAC'
      id = 'thirteen'
    } else if(Team === 'LAL') {
      teamP = 'LAL'
      teamID = 'LAL'
      id = 'fourteen'
    } else if(Team === 'MEM') {
      teamP = 'MEM'
      teamID = 'MEM'
      id = 'fifteen'
    } else if(Team === 'MIA') {
      teamP = 'MIA'
      teamID = 'MIA'
      id = 'sixteen'
    } else if(Team === 'MIL') {
      teamP = 'MIL'
      teamID = 'MIL'
      id = 'seventeen'
    } else if(Team === 'MIN') {
      teamP = 'MIN'
      teamID = 'MIN'
      id = 'eighteen'
    } else if(Team === 'NO') {
      teamP = 'NO'
      teamID = 'NO' 
      id ='nineteen'
    } else if(Team === 'NY') {
      teamP = 'NY'
      teamID = 'NY'
      id = 'twenty'
    } else if(Team === 'OKC') {
      teamP = 'OKC'
      teamID = 'OKC'
      id = 'twentyOne'
    } else if(Team === 'ORL') {
      teamP = 'ORL'
      teamID = 'ORL'
      id = 'twentyTwo'
    } else if(Team === 'PHI') {
      teamP = 'PHI'
      teamID = 'PHI'
      id = 'twentyThree'
    } else if(Team === 'PHO') {
      teamP = 'PHO'
      teamID = 'PHO'
      id = 'twentyFour'
    } else if(Team === 'POR') {
      teamP = 'POR'
      teamID = 'POR'
      id = 'twentyFive'
    } else if(Team === 'SAC') {
      teamP = 'SAC'
      teamID = 'SAC'
      id = 'twentySix'
    } else if(Team === 'SA') {
      teamP = 'SA'
      teamID = 'SA'
      id = 'twentySeven'
    } else if(Team === 'TOR') {
      teamP = 'TOR'
      teamID = 'TOR'
      id = 'twentyEight'
    } else if(Team === 'WAS') {
      teamP = 'WAS'
      teamID = 'WAS'
       id = 'twentyNine'
    } else if(Team === 'UTA'){
      teamP = 'UTA'
      teamID = 'UTA'
      id = 'thirty'
     }   
     
     
     
     // ADD CLASS FOR OPPONENT LOGO
    if(Opp === 'ATL') {
      oppP = 'ATL'
      oppId = 'zero'
    } else if(Opp === 'BOS') {
      oppP = 'BOS'
      oppId = 'one'
    } else if(Opp === 'BKN') {
      oppP = 'BKN'
      oppId = 'two'
    } else if(Opp === 'CHA') {
      oppP = 'CHA'
      oppId = 'three'
    } else if(Opp === 'CHI') {
      oppP = 'CHI'
      oppId = 'four'
    } else if(Opp === 'CLE') {
      oppP = 'CLE'
      oppId = 'five'
    } else if(Opp === 'DAL') {
      oppP = 'DAL'
      oppId = 'six'
    } else if(Opp === 'DEN') {
      oppP = 'DEN'
      oppId = 'seven'
    } else if(Opp === 'DET') {
      oppP = 'DET'
      oppId = 'eight'
    } else if(Opp === 'GS') {
      oppP = 'GS'
      oppId = 'nine'
    } else if(Opp === 'HOU') {
      oppP = 'HOU'
      oppId = 'ten'
    } else if(Opp === 'IND') {
      oppP = 'IND'
      oppId = 'eleven'
    } else if(Opp === 'LAC') {
      oppP = 'LAC'
      oppId = 'twelve'
    } else if(Opp === 'LAL') {
      oppP = 'LAL'
      oppId = 'thirteen'
    } else if(Opp === 'MEM') {
      oppP = 'MEM'
      oppId = 'fourteen'
    } else if(Opp === 'MIA') {
      oppP = 'MIA'
      oppId = 'fifteen'
    } else if(Opp === 'MIL') {
      oppP = 'MIL'
      oppId = 'sixteen'
    } else if(Opp === 'MIN') {
      oppP = 'MIN'
      oppId = 'seventeen'
    } else if(Opp === 'NO') {
      oppP = 'NO'
      oppId = 'eighteen'
    } else if(Opp === 'NY') {
      oppP = 'NY'
      oppId = 'nineteen'
    } else if(Opp === 'OKC') {
      oppP = 'OKC'
      oppId = 'twenty'
    } else if(Opp === 'ORL') {
      oppP = 'ORL'
      oppId = 'twentOne'
    } else if(Opp === 'PHI') {
      oppP = 'PHI'
      oppId = 'twentyTwo'
    } else if(Opp === 'PHO') {
      oppP = 'PHO'
      oppId = 'twentyThree'
    } else if(Opp === 'POR') {
      oppP = 'POR'
      oppId = 'twentyFour'
    } else if(Opp === 'SAC') {
      oppP = 'SAC'
      oppId = 'twentyFive'
    } else if(Opp === 'SA') {
      oppP = 'SA'
      oppId = 'twentySix'
    } else if(Opp === 'TOR') {
      oppP = 'TOR'
      oppId = 'twentySeven'
    } else if(Opp === 'WAS') {
      oppP = 'WAS'
      oppId = 'twentyEight'
    } else if(Opp === 'UTA') {
      oppP = 'UTA'
      oppId = 'twentyNine'
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

  $.map([id], function(index, value) {
    console.log(index + ":" + value)
  })
     
      
      
   
   

    




    

    
  

  



   
    


    // RENDER TABLE TO THE DOM
    $("table").append("<tr><td class='"+ id+"'>"+ id+"</td><td class='"+oppId+"'>"+oppId+"</td><td id='"+ teamID+"' class='"+ teamP +"'>"+ Team +"</td><td class='"+ oppP +"'>" + Opp+ "</td><td>" + TeamTot +  "</td><td class='"+ SpreadP +"'>"+ Spread +"</td><td class='"+ PaceP +"'>"+ Pace +"</td><td class='"+ OppPaceP +"'>"+ OppPace +"</td><td class='"+ PaceDiffP +"'>"+ PaceDiff +"</td><td class='"+ DvpRankP +"'>"+ DvpRank +"</td><td class='"+ pgP +"'>"+ pg +"</td><td class='"+ sgP +"'>"+ sg +"</td><td class='"+ sfP +"'>"+ sf +"</td><td class='"+ pfP +"'>"+ pf +"</td><td class='"+ cP +"'>"+ c +"</td></tr>")


    // SORT TABLE * THIS IS SET TO [[5,1]] WHIH SORTS THE 5TH COLUMN DESCENDING *
    $(function() {
      $('#ex-table').tablesorter({
        theme: 'blue',
        sortList: [[6,1]]
      })
    })

    

   

    // $.each([id], function( index,value) {
    //   console.log(value)

    //   if(id === 'one'){
    //     let game = `<div class="gameOne"><p>${teamP}</p></div>`
    //     $('#gameOne').html(game).css("display", "inline-block")
        
    //   } else if(id === 'three') {
    //     let game = `<div class="gameOne"><p>${teamP}</p></div>`
    //     $('#gameOne').html(game).css("display", "inline-block")
    //   }
        
      
    // })
    
   })  // END FUNCTION





    //PLAYER SEARCH BOX
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









  
  

 