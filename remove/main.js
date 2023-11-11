// Your web app's Firebase configuration
const firebaseConfig = {
}
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
// Set database variable
const database = firebase.database()

function remove() {
    var id = document.getElementById('username').value;

    database.ref('users/' + id).remove()
    alert("DELETED " + id)
}
    