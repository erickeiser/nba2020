$(document).ready(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBt3w0SrijhTTlmhI4pMhADKLZG6T4qb2w",
    authDomain: "nba2020-a2d10.firebaseapp.com",
    databaseURL: "https://nba2020-a2d10.firebaseio.com",
    projectId: "nba2020-a2d10",
    storageBucket: "nba2020-a2d10.appspot.com",
    messagingSenderId: "102256099093",
    appId: "1:102256099093:web:9fa0c01973ecaa222cb31c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   GAME BOXES 
var projection = firebase.database().ref().child("1FHdvApAOaE4zTlcR66Xkh3mmmaU0TPsgWqdXCY1pT4E/matchupBoxes")
projection.on("child_added", snap => {
    var id = snap.child('id').val()
    var team = snap.child('Team').val()
    var opp = snap.child('Opp').val()

    teamO = 'team'
    oppO = 'opp'
    gameP = 'vs.'

    if(team === 'ATL') {
        teamO = 'ATL'
      } else if(team === 'BOS') {
        teamO = 'BOS'
      } else if(team === 'BKN') {
        teamO = 'BKN'
      } else if(team === 'CHA') {
        teamO = 'CHA'
      } else if(team === 'CHI') {
        teamO = 'CHI'
      } else if(team === 'CLE') {
        teamO = 'CLE'
      } else if(team === 'DAL') {
        teamO = 'DAL'
      } else if(team === 'DEN') {
        teamO = 'DEN'
      } else if(team === 'DET') {
        teamO = 'DET'
      } else if(team === 'GS') {
        teamO = 'GS'
      } else if(team === 'HOU') {
        teamO = 'HOU'
      } else if(team === 'IND') {
        teamO = 'IND'
      } else if(team === 'LAC') {
        teamO = 'LAC'
      } else if(team === 'LAL') {
        teamO = 'LAL'
      } else if(team === 'MEM') {
        teamO = 'MEM'
      } else if(team === 'MIA') {
        teamO = 'MIA'
      } else if(team === 'MIL') {
        teamO = 'MIL'
        game = 'game'
      } else if(team === 'MIN') {
        teamO = 'MIN'
      } else if(team === 'NO') {
        teamO = 'NO'
      } else if(team === 'NY') {
        teamO = 'NY'
      } else if(team === 'OKC') {
        teamO = 'OKC'
      } else if(team === 'ORL') {
        teamO = 'ORL'
      } else if(team === 'PHI') {
        teamO = 'PHI'
      } else if(team === 'PHO') {
        teamO = 'PHO'
      } else if(team === 'POR') {
        teamO = 'POR'
      } else if(team === 'SAC') {
        teamO = 'SAC'
      } else if(team === 'SA') {
        teamO = 'SA'
      } else if(team === 'TOR') {
        teamO = 'TOR'
      } else if(team === 'WAS') {
        teamO = 'WAS'
      } else if(team === 'UTA'){
        teamO = 'WAS'
      }

      
     
      
      // ADD CLASS FOR OPPONENT LOGO
      if(opp === 'ATL') {
        oppO = 'ATL'
        
      } else if(opp === 'BOS') {
        oppO = 'BOS'
      } else if(opp === 'BKN') {
        oppO = 'BKN'
      } else if(opp === 'CHA') {
        oppO = 'CHA'
      } else if(opp === 'CHI') {
        oppO = 'CHI'
      } else if(opp === 'CLE') {
        oppO = 'CLE'
      } else if(opp === 'DAL') {
        oppO = 'DAL'
      } else if(opp === 'DEN') {
        oppO = 'DEN'
      } else if(opp === 'DET') {
        oppO = 'DET'
      } else if(opp === 'GS') {
        oppO = 'GS'
      } else if(opp === 'HOU') {
        oppO = 'HOU'
      } else if(opp === 'IND') {
        oppO = 'IND'
      } else if(opp === 'LAC') {
        oppO = 'LAC'
      } else if(opp === 'LAL') {
        oppO = 'LAL'
      } else if(opp === 'MEM') {
        oppO = 'MEM'
      } else if(opp === 'MIA') {
        oppO = 'MIA'
      } else if(opp === 'MIL') {
        oppO = 'MIL'
      } else if(opp === 'MIN') {
        oppO = 'MIN'
      } else if(opp === 'NO') {
        oppO = 'NO'
      } else if(opp === 'NY') {
        oppO = 'NY'
      } else if(opp === 'OKC') {
        oppO = 'OKC'
      } else if(opp === 'ORL') {
        oppO = 'ORL'
      } else if(opp === 'PHI') {
        oppO = 'PHI'
      } else if(opp === 'PHO') {
        oppO = 'PHO'
      } else if(opp === 'POR') {
        oppO = 'POR'
      } else if(opp === 'SAC') {
        oppO = 'SAC'
      } else if(opp === 'SA') {
        oppO = 'SA'
      } else if(opp === 'TOR') {
        oppO = 'TOR'
      } else if(opp === 'WAS') {
        oppO = 'WAS'
      } else if(opp === 'UTA') {
        oppO = 'UTA'
      }

      if(id === 1) {
          $('#games').append(`<button id="gameOne" class="btn btn-lg gameOne"><p class="teamOne">${teamO}</p></button>`)
    }
    if(id === 2) {
        $('#games').append(`<button id="gameTwo" class="btn btn-lg gameTwo"><p class="teamTwo">${teamO}</p></button>`)
    }

    if(id === 3) {
        $('#games').append(`<button id="gameThree" class="btn btn-lg gameThree"><p class="teamThree">${teamO}</p></button>`)
    }
    if(id === 4) {
        $('#games').append(`<button id="gameFour" class="btn btn-lg gameFour"><p class="teamFour">${teamO}</p></button>`)
    }

    if(id === 5) {
        $('#games').append(`<button id="gameFive" class="btn btn-lg gameFive"><p class="teamFive">${teamO}</p></button>`)
    }

    if(id === 6) {
        $('#games').append(`<button id="gameSix" class="btn btn-lg gameSix"><p class="teamSix">${teamO}</p></button>`)
    }

    if(id === 7) {
        $('#games').append(`<button id="gameSeven" class="btn btn-lg gameSeven"><p class="teamSeven">${teamO}</p></button>`)
    }

    if(id === 8) {
        $('#games').append(`<button id="gameEight" class="btn btn-lg gameEight"><p class="teamEight">${teamO}</p></button>`)
    }

    if(id === 9) {
        $('#games').append(`<button id="gameNine" class="btn btn-lg gameNine"><p class="teamNine">${teamO}</p></button>`)
    }

    if(id === 10) {
        $('#games').append(`<button id="gameTen" class="btn btn-lg gameTen"><p class="teamTen">${teamO}</p></button>`)
    }

    if(id === 11) {
        $('#games').append(`<button id="gameEleven" class="btn btn-lg gameEleven"><p class="teamEleven">${teamO}</p></button>`)
    }

    if(id === 12) {
        $('#games').append(`<button id="gameTwelve" class="btn btn-lg gameTwelve"><p class="teamTwelve">${teamO}</p></button>`)
    }

    if(id === 13) {
        $('#games').append(`<button id="gameThirteen" class="btn btn-lg gameThirteen"><p class="teamThirteen">${teamO}</p></button>`)
    }

    if(id === 14) {
        $('#games').append(`<button id="gameFourteen" class="btn btn-lg gameFourteen"><p class="teamFourteen">${teamO}</p></button>`)
    }

    if(id === 15) {
        $('#games').append(`<button id="gameFifteen" class="btn btn-lg gameFifteen"><p class="teamFifteen">${teamO}</p></button>`)
    }

  

    
    

    
})

    
      
          

    
     

                // ***************** PROJECTION TABLE *********************************
var projection = firebase.database().ref().child("1FHdvApAOaE4zTlcR66Xkh3mmmaU0TPsgWqdXCY1pT4E/projection")
projection.on("child_added", snap => {
    let id = snap.child('id').val()
    let player = snap.child('player_final').val()
    let position = snap.child('POS').val()
    let team = snap.child('TM').val()
    let game = snap.child('Game').val()
    let opp = snap.child('Opp').val()
    let salary = snap.child('SALARY').val()
    let projection = snap.child('FINAL').val()
    let dvp = snap.child('DVP').val()
    let teamtot = snap.child('TM_TLL').val()
    let floor = snap.child('Floor').val()
    let ceiling = snap.child('Ceiling').val()
    let fppg = snap.child('FPPG').val()
    let fppm = snap.child('FPPM').val()
    let usage = snap.child('USG').val()
    let minPerGame = snap.child('MPG').val()
    let projectedMinutes = snap.child('MIN').val()
    let value = snap.child('VALUE').val()
    teamP = 'team'
    oppP = 'opp'
    idP = 'id'
    pMinP = 'min'
    rowP = ''
    posP = 'pos'
    activeP = ''

    // ******************** POSTION FILTER BUTTONS *******************//
   if(position === 'PG') {
       posP = 'pg pgp'
       rowP = 'pg'
   } else if(position === 'SG') {
       posP = 'sg sgp'
       rowP = 'sg '
   } else if(position === 'SF') {
       posP = 'sf sfp'
       rowP = 'sf'
   } else if(position === 'PF') {
       posP = 'pf pfp'
       rowP = 'pf'
   } else {
       posP = 'c cp'
       rowP = 'c'
   }
   $('#all').click(function() {
       $('.pg').show()
       $('.sg').show()
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
    $('.pg').hide()
    $('.sg').show()
    $('.sf').hide()
    $('.pf').hide()
    $('.c').hide()
})
$('#sf').click(function(){
    $('.pg').hide()
    $('.sg').hide()
    $('.sf').show()
    $('.pf').hide()
    $('.c').hide()
})
$('#pf').click(function(){
    $('.pg').hide()
    $('.sg').hide()
    $('.sf').hide()
    $('.pf').show()
    $('.c').hide()
})
$('#c').click(function(){
    $('.pg').hide()
    $('.sg').hide()
    $('.sf').hide()
    $('.pf').hide()
    $('.c').show()
})



    if(team === 'ATL') {
       teamP = 'ATL'
       
     } else if(team === 'BOS') {
       teamP = 'BOS'
     } else if(team === 'BKN') {
       teamP = 'BKN'
     } else if(team === 'CHA') {
       teamP = 'CHA'
     } else if(team === 'CHI') {
       teamP = 'CHI'
     } else if(team === 'CLE') {
       teamP = 'CLE'
     } else if(team === 'DAL') {
       teamP = 'DAL'
    //    rowP = 'dal'
     } else if(team === 'DEN') {
       teamP = 'DEN'
     } else if(team === 'DET') {
       teamP = 'DET'
     } else if(team === 'GS') {
       teamP = 'GS'
     } else if(team === 'HOU') {
       teamP = 'HOU'
    //    activeP = 'active'
     } else if(team === 'IND') {
       teamP = 'IND'
     } else if(team === 'LAC') {
       teamP = 'LAC'
     } else if(team === 'LAL') {
       teamP = 'LAL'
     } else if(team === 'MEM') {
       teamP = 'MEM'
     } else if(team === 'MIA') {
       teamP = 'MIA'
     } else if(team === 'MIL') {
       teamP = 'MIL'
     } else if(team === 'MIN') {
       teamP = 'MIN'
    //    rowP = 'min'
     } else if(team === 'NO') {
       teamP = 'NO'
     } else if(team === 'NY') {
       teamP = 'NY'
     } else if(team === 'OKC') {
       teamP = 'OKC'
     } else if(team === 'ORL') {
       teamP = 'ORL'
     } else if(team === 'PHI') {
       teamP = 'PHI'
     } else if(team === 'PHO') {
       teamP = 'PHO'
     } else if(team === 'POR') {
       teamP = 'POR'
     } else if(team === 'SAC') {
       teamP = 'SAC'
     } else if(team === 'SAS') {
       teamP = 'SAS'
     } else if(team === 'TOR') {
       teamP = 'TOR'
     } else if(team === 'WAS') {
       teamP = 'WAS'
     } else if(team === 'UTA'){
       teamP = 'WAS'
     }
     
    
     
     // ADD CLASS FOR OPPONENT LOGO
     if(opp === 'ATL') {
       oppP = 'ATL'
       
     } else if(opp === 'BOS') {
       oppP = 'BOS'
     } else if(opp === 'BKN') {
       oppP = 'BKN'
     } else if(opp === 'CHA') {
       oppP = 'CHA'
     } else if(opp === 'CHI') {
       oppP = 'CHI'
     } else if(opp === 'CLE') {
       oppP = 'CLE'
     } else if(opp === 'DAL') {
       oppP = 'DAL'
     } else if(opp === 'DEN') {
       oppP = 'DEN'
     } else if(opp === 'DET') {
       oppP = 'DET'
     } else if(opp === 'GS') {
       oppP = 'GS'
     } else if(opp === 'HOU') {
       oppP = 'HOU'
     } else if(opp === 'IND') {
       oppP = 'IND'
     } else if(opp === 'LAC') {
       oppP = 'LAC'
     } else if(opp === 'LAL') {
       oppP = 'LAL'
     } else if(opp === 'MEM') {
       oppP = 'MEM'
     } else if(opp === 'MIA') {
       oppP = 'MIA'
     } else if(opp === 'MIL') {
       oppP = 'MIL'
     } else if(opp === 'MIN') {
       oppP = 'MIN'
     } else if(opp === 'NO') {
       oppP = 'NO'
     } else if(opp === 'NY') {
       oppP = 'NY'
     } else if(opp === 'OKC') {
       oppP = 'OKC'
     } else if(opp === 'ORL') {
       oppP = 'ORL'
     } else if(opp === 'PHI') {
       oppP = 'PHI'
     } else if(opp === 'PHO') {
       oppP = 'PHO'
     } else if(opp === 'POR') {
       oppP = 'POR'
     } else if(opp === 'SAC') {
       oppP = 'SAC'
     } else if(opp === 'SAS') {
       oppP = 'SAS'
     } else if(opp === 'TOR') {
       oppP = 'TOR'
     } else if(opp === 'WAS') {
       oppP = 'WAS'
     } else if(opp === 'UTA') {
       oppP = 'UTA'
     }

     

    

    


       
      

  if(projectedMinutes <= 0) {
    rowP = 'hide'
}

    
    
   

     

    
    


    $('#projections').append("<tr id='"+ activeP +"' class='"+rowP+"'><td>"+ value +"</td><td>"+ player +"</td><td class='"+ posP +"'>"+ position +"</td><td class='"+ teamP +"'>"+ team +"</td><td class='"+ oppP +"'>"+ opp +"</td><td>"+ "$"+salary +"</td><td>"+  projection+"</td><td>"+ dvp +"</td><td>"+ teamtot +"</td><td>"+ floor +"</td><td>"+ ceiling +"</td><td>"+ fppg +"</td><td>"+ fppm +"</td><td>"+ usage +"</td><td>"+ minPerGame +"</td><td class='"+ rowP +"'>"+ projectedMinutes +"</td></tr>")


    // if($("#gameOne").val() === 'HOU') {
    //    console.log(teamP)
    // } else {
       
    // }
console.log($('.teamOne').val())
    

    })


  

   
  // Pulling matchup data
   var database = firebase.database().ref().child("1FHdvApAOaE4zTlcR66Xkh3mmmaU0TPsgWqdXCY1pT4E/matchups");
   database.on("child_added", snap =>{
     let id = snap.child('id').val()
     let team = snap.child('Team').val()
     let opp = snap.child('Opp').val()
     let teamtot = snap.child('TeamTot').val()
     let Spread = snap.child('Spread').val()
     let Pace = snap.child('Pace').val()
     let OPace = snap.child('oPace').val()
     let paceDiff = snap.child('Pace_Diff').val()
     let dvpRank = snap.child('dvp').val()
     let pg = snap.child('PG').val()
     let sg = snap.child('SG').val()
     let sf = snap.child('SF').val()
     let pf = snap.child('PF').val()
     let c = snap.child('C').val()

     teamP = 'team'
     oppP = 'opp'
     idP = 'id'
     tRow = 'rows'

     if(team === 'ATL') {
        teamP = 'ATL'
      } else if(team === 'BOS') {
        teamP = 'BOS'
      } else if(team === 'BKN') {
        teamP = 'BKN'
      } else if(team === 'CHA') {
        teamP = 'CHA'
      } else if(team === 'CHI') {
        teamP = 'CHI'
      } else if(team === 'CLE') {
        teamP = 'CLE'
      } else if(team === 'DAL') {
        teamP = 'DAL'
      } else if(team === 'DEN') {
        teamP = 'DEN'
      } else if(team === 'DET') {
        teamP = 'DET'
      } else if(team === 'GS') {
        teamP = 'GS'
      } else if(team === 'HOU') {
        teamP = 'HOU'
      } else if(team === 'IND') {
        teamP = 'IND'
      } else if(team === 'LAC') {
        teamP = 'LAC'
      } else if(team === 'LAL') {
        teamP = 'LAL'
      } else if(team === 'MEM') {
        teamP = 'MEM'
      } else if(team === 'MIA') {
        teamP = 'MIA'
      } else if(team === 'MIL') {
        teamP = 'MIL'
      } else if(team === 'MIN') {
        teamP = 'MIN'
      } else if(team === 'NO') {
        teamP = 'NO'
      } else if(team === 'NY') {
        teamP = 'NY'
      } else if(team === 'OKC') {
        teamP = 'OKC'
      } else if(team === 'ORL') {
        teamP = 'ORL'
      } else if(team === 'PHI') {
        teamP = 'PHI'
      } else if(team === 'PHO') {
        teamP = 'PHO'
      } else if(team === 'POR') {
        teamP = 'POR'
      } else if(team === 'SAC') {
        teamP = 'SAC'
      } else if(team === 'SA') {
        teamP = 'SA'
      } else if(team === 'TOR') {
        teamP = 'TOR'
      } else if(team === 'WAS') {
        teamP = 'WAS'
      } else if(team === 'UTA'){
        teamP = 'WAS'
      }
      
     
      
      // ADD CLASS FOR OPPONENT LOGO
      if(opp === 'ATL') {
        oppP = 'ATL'
        
      } else if(opp === 'BOS') {
        oppP = 'BOS'
      } else if(opp === 'BKN') {
        oppP = 'BKN'
      } else if(opp === 'CHA') {
        oppP = 'CHA'
      } else if(opp === 'CHI') {
        oppP = 'CHI'
      } else if(opp === 'CLE') {
        oppP = 'CLE'
      } else if(opp === 'DAL') {
        oppP = 'DAL'
      } else if(opp === 'DEN') {
        oppP = 'DEN'
      } else if(opp === 'DET') {
        oppP = 'DET'
      } else if(opp === 'GS') {
        oppP = 'GS'
      } else if(opp === 'HOU') {
        oppP = 'HOU'
      } else if(opp === 'IND') {
        oppP = 'IND'
      } else if(opp === 'LAC') {
        oppP = 'LAC'
      } else if(opp === 'LAL') {
        oppP = 'LAL'
      } else if(opp === 'MEM') {
        oppP = 'MEM'
      } else if(opp === 'MIA') {
        oppP = 'MIA'
      } else if(opp === 'MIL') {
        oppP = 'MIL'
      } else if(opp === 'MIN') {
        oppP = 'MIN'
      } else if(opp === 'NO') {
        oppP = 'NO'
      } else if(opp === 'NY') {
        oppP = 'NY'
      } else if(opp === 'OKC') {
        oppP = 'OKC'
      } else if(opp === 'ORL') {
        oppP = 'ORL'
      } else if(opp === 'PHI') {
        oppP = 'PHI'
      } else if(opp === 'PHO') {
        oppP = 'PHO'
      } else if(opp === 'POR') {
        oppP = 'POR'
      } else if(opp === 'SAC') {
        oppP = 'SAC'
      } else if(opp === 'SA') {
        oppP = 'SA'
      } else if(opp === 'TOR') {
        oppP = 'TOR'
      } else if(opp === 'WAS') {
        oppP = 'WAS'
      } else if(opp === 'UTA') {
        oppP = 'UTA'
      }

     
       
      if(id <= 0) {
          tRow = 'hide'
      }

    
      
      

       $('#playerData').append("<tr class='"+ tRow +"'><td class='"+ idP +"'>"+ id+"</td><td class='"+ teamP +"'>"+ team +"</td><td class='"+ oppP +"'>"+opp+"</td><td>"+ teamtot +"</td><td>"+ Spread +"</td><td>"+ Pace +"</td><td>"+ OPace +"</td><td>"+ paceDiff +"</td><td>"+ dvpRank +"</td><td>"+ pg +"</td><td>"+ sg +"</td><td>"+ sf +"</td><td>"+ pf +"</td><td>"+ c +"</td></tr>")
       
   })
//    TOGGLE THE CURRENT TWO PAGES
   $('.pageToggle').click(function(){
       $('#projection_table').toggle()
       $('#matchup_table').toggle()
       $('#projectionToggle').toggle()
       $('#matchupToggle').toggle()
       $('#games').toggle()
   })

   
})
