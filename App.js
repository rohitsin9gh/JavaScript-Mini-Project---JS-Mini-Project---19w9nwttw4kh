function validation() {
  var retunval = true;

  let userName = document.forms["myForm"]["fname"].value;

  if (userName.trim().length < 5) {
    alert("length of username is too short");
    retunval = false;
  }

  let email = document.forms["myForm"]["femail"].value;
  if (email.trim().length > 40) {
    alert("length of email is too long");
    retunval = false;
  }

  let phone = document.forms["myForm"]["fcontact"].value;
  if (phone.trim().length != 10) {
    alert("Phone number should be 10 legth");
    retunval = false;
  }

  let password = document.forms["myForm"]["fpassword"].value;
  let pswwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
  if (password.match(pswwd)) {
    retunval = true;
  } else {
    alert(
      "length from 5 to 10 and one capital and one small and number and one special char also"
    );
    retunval = false;
  }

  let cpassword = document.forms["myForm"]["fcpassword"].value;
  if (cpassword != password) {
    alert("Password and Confirm password should match");
    retunval = false;
  }

  let subject = document.forms["myForm"]["fsubject"].value;
  if (subject == "") {
    alert("select ur course");
    retunval = false;
  }
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
  if (!validUser) {
    alert("invalid user name or password");
  }
  return validUser;
}
