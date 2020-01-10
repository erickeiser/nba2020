
 
  // Pulling data from firebase into an HTML table
 var rootRef = firebase.database().ref()
 rootRef.once('value')
 .then(function(snap){
     var key = snap.key
     var childKey = snap.child('users/data').key

     console.log(childKey[2])
 })