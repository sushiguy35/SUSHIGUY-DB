// Your web app's Firebase configuration
const firebaseConfig = {
}
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
// Set database variable
const database = firebase.database()

function update() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const extra = document.getElementById('extra').value;
    const codingLang = document.getElementById('codingLang').value;

    var updates = {
        username: username,
        email: email,
        password: password,
        extra: extra,
        codingLang: codingLang
    }

    database.ref('users/' + username).update(updates)

    alert("UPDATED DATA ON " + username)
}
    