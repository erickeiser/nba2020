const firebaseConfig = {
  apiKey: "AIzaSyCG6Ey2aKB0Rbmq2LhyXnKDUkmufzhE5II",
  authDomain: "http://dfs-data.firebaseapp.com",
  databaseURL: "https://dfs-data.firebaseio.com",
  projectId: "dfs-data",
  storageBucket: "http://dfs-data.appspot.com",
  messagingSenderId: "400063880617",
  appId: "1:400063880617:web:3b470f7a6049b3b7f078b8"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 //Pulling data from FireBase
 var database= firebase.database();
 database.ref().on("child_added", snap =>{
    var team = snap.child("team").val()
    var opp = snap.child("opp").val()
    var teamTot = snap.child("teamTot").val()
    var spread= snap.child("spread").val()
    var pace = snap.child("pace").val()
    var oppPace =snap.child("oppPace").val()
    var paceDiff =snap.child("paceDiff").val()
    var dvpRank =snap.child("dvpRank").val()
    var pg= snap.child("pg").val()
    var sg= snap.child("sg").val()
    var sf= snap.child("sf").val()
    var pf=snap.child("pf").val()
    var c=snap.child("c").val()

    valP= 'val'
    valD ='val'
    valPG= 'val'
    valSG='val'
    valSF='val'
    valPF='val'
    valC='val'
    
     //document.getElementById("teamC").innerHTML=team.length
     var count= Object.keys(team);

    //format dvpRank
    if (dvpRank >= 20 && dvpRank <= 30){
        valD='vGood'
    }
    else if (dvpRank < 20 && dvpRank >= 16){
        valD='good'
    }
    else if (dvpRank < 16 && dvpRank >= 10){
        valD='avg'
    }
    else if (dvpRank < 10 && dvpRank >= 5){
        valD='poor'
    }
    else {
        valD='vPoor'
    }

    //format pg_D
    if (pg >= 20 && pg<= 30){
        valPG='vGood'
    }
    else if (pg < 20 && pg >= 16){
        valPG='good'
    }
    else if (pg < 16 && pg >= 10){
        valPG='avg'
    }
    else if (pg < 10 && pg>= 5){
        valPG='poor'
    }
    else {
        valPG='vPoor'
    }

    //format sg_D
    if (sg >= 20 && sg<= 30){
        valSG='vGood'
    }
    else if (sg < 20 && sg >= 16){
        valSG='good'
    }
    else if (sg < 16 && sg >= 10){
        valSG='avg'
    }
    else if (sg < 10 && sg>= 5){
        valSG='poor'
    }
    else {
        valSG='vPoor'
    }

    //format sf_D
    if (sf >= 20 && sf <= 30){
        valSF='vGood'
    }
    else if (sf < 20 && sf >= 16){
        valSF='good'
    }
    else if (sf < 16 && sf >= 10){
        valSF='avg'
    }
    else if (sf < 10 && sf>= 5){
        valSF='poor'
    }
    else {
        valSF='vPoor'
    }

    //format pf_D
    if (pf >= 20 && pf <= 30){
        valPF='vGood'
    }
    else if (pf < 20 && pf >= 16){
        valPF='good'
    }
    else if (pf < 16 && pf >= 10){
        valPF='avg'
    }
    else if (pf < 10 && pf>= 5){
        valPF='poor'
    }
    else {
        valPF='vPoor'
    }

    //format c_D
    if (c >= 20 && c <= 30){
        valC='vGood'
    }
    else if (c < 20 && c >= 16){
        valC='good'
    }
    else if (c < 16 && c >= 10){
        valC='avg'
    }
    else if (c < 10 && c>= 5){
        valC='poor'
    }
    else {
        valC='vPoor'
    }

    //format paceDiff
    if (paceDiff >=3 ){
        valP='vGood'
    }
    else if (paceDiff < 3 && paceDiff >=0){
        valP='avg'
    }
    else if (paceDiff <0 && paceDiff >-2.5){
        valP='poor'
    }
    
    else {
        valP='vPoor'
    }

     $("table").append("<tr><td>"+ team + "</td><td>" + opp + "</td><td>" + teamTot + "</td><td>" + spread + 
        "</td><td>" + pace + "</td><td>" + pace + "</td><td class='" + valP+ "'>" + paceDiff + "</td><td class='" + valD+ 
        "'>" + dvpRank + "</td><td class='" + valPG+ "'>"+ pg+ "</td><td class='" + valSG+ "'>"+ sg + "</td><td class='" + valSF+ "'>" 
        + sf + "</td><td class='" + valPF+ "'>"+ pf + "</td><td class='" + valC+ "'>" + c + "</td></tr>")


            // SORT TABLE * THIS IS SET TO [[5,1]] WHIH SORTS THE 5TH COLUMN DESCENDING *
    $(function() {
      $('#table').tablesorter({
        theme: 'blue',
        sortList: [[2,1]]
      })
    })

    })

        n =  new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

     
    
     