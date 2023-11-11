// Your web app's Firebase configuration
const firebaseConfig = {
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
// Set database variable
const database = firebase.database()
  
function save() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const extra = document.getElementById('extra').value;
  const codingLang = document.getElementById('codingLang').value;

  database.ref('users/' + username).set({
    username: username,
    email: email,
    password: password,
    extra: extra,
    codingLang: codingLang
  })
  alert('DATA SAVED TO DB')
}