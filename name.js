let userStorage = localStorage.getItem("user");
let getUserName = JSON.parse(userStorage);
// var user = JSON.parse(localStorage.getItem('currentUser'));

getUserName.forEach((user) => {
  document.getElementById("name").innerHTML = user.username;
  document.getElementById("email").innerHTML = user.email;
  document.getElementById("contact").innerHTML = user.contact;
});

setTimeout(function () {
  window.open("index.html", "_self");
}, 30000);
