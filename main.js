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
  database.ref().on('value', function(snapshot){
      if(snapshot.exists()){
          var content = '';
          snapshot.forEach(function(data){
              var val = data.val();
              content +='<tr>';
              content += '<td class="player">' + val.Player + '</td>';
              content += '<td>' + val.Pos + '</td>';
              content += '<td>' + val.Team + '</td>';
              content += '<td>' + val.Opp + '</td>';
              content += '<td>' + val.Salary + '</td>';
              content += '<td class="projection">' + val.Projection + '</td>';
              content += '<td>' + val.dvp + '</td>';
              content += '<td>' + val.TmTTL + '</td>';
              content += '<td>' + val.Floor + '</td>';
              content += '<td>' + val.Ceiling + '</td>';
              content += '<td>' + val.fppg + '</td>';
              content += '<td>' + val.fppm + '</td>';
              content += '<td>' + val.usg + '</td>';
              content += '<td>' + val.mpg + '</td>';
              content += '<td>' + val.pmin + '</td>';
              content += '<td>' + val.value + '</td>';
              content += '</tr>';
          });
          $('#ex-table').append(content);
      }
  });

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

var projection = $('td:nth-child(5)').addClass('favorite')


