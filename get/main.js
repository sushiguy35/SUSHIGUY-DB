// Your web app's Firebase configuration
const firebaseConfig = {
   
}
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
// Set database variable
const database = firebase.database()

function get() {
    var username = document.getElementById('username').value;

    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
        var data = snapshot.val()
        console.log(data)
    })
}