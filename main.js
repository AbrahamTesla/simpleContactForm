// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "Use Your API-KEY",
  authDomain: "contact-form-f7d1e.firebaseapp.com",
  databaseURL: "https://contact-form-f7d1e.firebaseio.com",
  projectId: "contact-form-f7d1e",
  storageBucket: "contact-form-f7d1e.appspot.com",
  messagingSenderId: "794760296534",
  appId: "Use Your Own AppID",
  measurementId: "G-K3QX0Q497M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//Referrence message collections
let messagesRef = firebase.database().ref("messages");

//listen for form submit
document.querySelector("#contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Getting the values
  let name = getInputValue("#name");
  let company = getInputValue("#company");
  let phone = getInputValue("#phone");
  let email = getInputValue("#email");
  let message = getInputValue("#message");

  console.log(name, phone, email);

  //Save Message
  saveMessages(name, company, email, phone, message);

  showAlert();
  allClear();
}

function getInputValue(id) {
  return document.querySelector(id).value;
}

function saveMessages(name, company, email, phone, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}

//show Alert
function showAlert() {
  document.querySelector(".alert").style.display = "block";
}
// clear all fields and timeout message
function allClear() {
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  document.querySelector("#contactForm").reset();
}
