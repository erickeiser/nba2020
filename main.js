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
 
  var database = firebase.database();
  database.ref().on('value', function(snapshot){
      if(snapshot.exists()){
          var content = '';
          snapshot.forEach(function(data){
              var val = data.val();
              content +='<tr>';
              content += '<td>' + val.Player + '</td>';
              content += '<td>' + val.Pos + '</td>';
              content += '<td>' + val.Team + '</td>';
              content += '<td>' + val.Opp + '</td>';
              content += '<td>' + val.dvp + '</td>';
              content += '<td>' + val.VegasPts + '</td>';
              content += '<td>' + val.Salary + '</td>';
              content += '<td>' + val.Floor + '</td>';
              content += '<td>' + val.Ceiling + '</td>';
              content += '<td>' + val.fppg + '</td>';
              content += '<td>' + val.fppm + '</td>';
              content += '<td>' + val.usg + '</td>';
              content += '<td>' + val.fga + '</td>';
              content += '<td>' + val.mpg + '</td>';
              content += '<td>' + val.projMin + '</td>';
              content += '<td>' + val.proj + '</td>';
              content += '<td>' + val.value + '</td>';
              content += '</tr>';
          });
          $('#ex-table').append(content);
      }
  });
