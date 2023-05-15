document.querySelector('a').onclick = function () {
    window.location.href = 'signup.html';
}

const firebaseConfig = {
    apiKey: "AIzaSyBjrwRD89Pyp3JS06QrFzyitlvYSAAXaqw",
    authDomain: "elitmusassign.firebaseapp.com",
    databaseURL: "https://elitmusassign-default-rtdb.firebaseio.com/",
    projectId: "elitmusassign",
    storageBucket: "elitmusassign.appspot.com",
    messagingSenderId: "177430761681",
    appId: "1:177430761681:web:494ca3a3c44419578cf5f0"
  };
firebase.initializeApp(firebaseConfig);

// Listen for form submit
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById('email').value.toString().trim();
    var password = document.getElementById('password').value.toString().trim();

    if(email=='admin@admin.com'){
        if(password=='adminpass'){
            window.location.href = 'admin.html';
        }else{
            alert('wrong password');
        }
        return;
    }

    // create user
    loginUser(email, password);
}


// Save message to firebase
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            // Clear form
            document.getElementById('contactForm').reset();

            window.location.href='start.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}