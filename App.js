
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});


function CheckPassword(inputtxt) 
{ 
var passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
if(inputtxt.value.match(passw)) 
    { 
        return true;
    }
    else
        { 
            alert('password between 5 to 10 character, one numeric digit, one special charector, one uppercase and one lowercase letter')
            return false;
        }
}

function addData(){
    let userName = document.getElementById("user").value;
    let password = document.getElementById("id_password").value;

    // store data in localstorage

    localStorage.setItem("username",userName);
    localStorage.setItem("pasword",password);
}


function checkData(){
    let userName = document.getElementById("user").value;
    let password = document.getElementById("id_password").value;
    
    // get data from localstorage

    let getUserName = localStorage.getItem('username');
    let getPassword = localStorage.getItem('pasword')

    if(userName == getUserName)
    {
        if(password == getPassword)
        {
            return true;
        }
        else
        {
            alert("wrong passwrod");
            return false;
        }
    }
    else
    {
        alert("Invalid username or password");
    }
}


