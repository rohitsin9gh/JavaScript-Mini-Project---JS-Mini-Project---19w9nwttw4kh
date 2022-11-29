function validation() {
  var retunval = true;

  let userName = document.forms["myForm"]["fname"].value;
  document.getElementById("usrnm").innerHTML = "";
  if (userName.trim().length < 5) {
    document.getElementById("usrnm").innerHTML = "username is too short";
    retunval = false;
  }

  let email = document.forms["myForm"]["femail"].value;
  document.getElementById("usremail").innerHTML = "";
  if (email.trim().length > 20) {
    document.getElementById("usremail").innerHTML =
      "length of email is too long";
    retunval = false;
  }

  let phone = document.forms["myForm"]["fcontact"].value;
  document.getElementById("usrcontact").innerHTML = "";
  if (phone.trim().length != 10) {
    document.getElementById("usrcontact").innerHTML =
      "Phone number should be 10 digit";
    retunval = false;
  }

  let password = document.forms["myForm"]["fpassword"].value;
  let pswwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
  document.getElementById("usrpsw").innerHTML = "";
  if (password.match(pswwd)) {
    retunval = true;
  } else {
    document.getElementById("usrpsw").innerHTML =
      "5-10, A-Z, a-z, 0-9, !@#$%^&*";
    retunval = false;
  }

  let cpassword = document.forms["myForm"]["fcpassword"].value;
  document.getElementById("cpsw").innerHTML = "";
  if (cpassword != password) {
    document.getElementById("cpsw").innerHTML =
      "Password and Confirm password should match";
    retunval = false;
  }
  return retunval;
}
function addData() {
  let username = document.getElementById("fname").value;

  let email = document.getElementById("femail").value;

  let contact = document.getElementById("fcontact").value;

  let password = document.getElementById("fpassword").value;

  let userStorage = localStorage.getItem("user");

  if (!userStorage) {
    userStorage = [];
  } else {
    userStorage = JSON.parse(userStorage);
  }

  let obj1 = { username, email, contact, password };

  let user = [obj1];

  let arr = [...userStorage];

  arr.push(obj1);

  localStorage.setItem("user", JSON.stringify(arr));
}

function checkData() {
  let userName = document.getElementById("fname").value;
  let password = document.getElementById("fpassword").value;

  let userStorage = localStorage.getItem("user");

  // get data from localstorage

  let getUserName = JSON.parse(userStorage);
  // console.log(getUserName);
  let validUser = false;
  getUserName.forEach((user) => {
    if (userName == user.username && password == user.password) {
      validUser = true;
    }
    //else {
    //     alert("wrong passwrod");
    //     // return false;
    //   }
    // } else {
    //   alert("Invalid username");
    //   //   return false;
    // }
  });
  document.getElementById("psw").innerHTML = "";
  if (!validUser) {
    document.getElementById("psw").innerHTML = "Invalid user name or password";
  }
  return validUser;
}
