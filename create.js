var attempt = 3;
var i;
var usernames = ["john", "billy", 'barry', "admin"];
var passwords = ["1234", "3212", "4554","password"];

function val() {

    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if (usernames.indexOf(username) != -1 && passwords.indexOf(password) != -1) {
        if (usernames.indexOf(username) != 3 && passwords.indexOf(password) != 3) {
        location.assign("mainPage.html")
        }

        else if ((passwords.indexOf(password) == 3) && (passwords.indexOf(password) == 3)){
          alert("Admin login succsessful.")
          location.assign("adminPg.html")

        }
        else{

          return

        }
    }

    else if (attempt == 0) {
          alert("To many tries. Please try again later.")
          document.getElementById("submit").className = "btn disabled";
      }

    else {
        validate();
        attempt--;
        alert("Wrong username or password. Please try again.")



    }
}


function addAccount() {
  location.assign("createAccount.html")
}

function validate() {
  document.getElementById("Username").value = "";
  document.getElementById("Password").value = "";
}

function createVal(){
  if ((document.getElementById("createUser").value != "") && (document.getElementById("createPass").value != "")){
    var createUsername = document.getElementById("createUser").value;
    var createPassword = document.getElementById("createPass").value;
    usernames.push(createUsername);
    passwords.push(createPassword);
    clearCreate();
    alert("Succsess! New account created!")
    location.assign("create.html")
  }
  else {
    alert("Please fill out all fields.")
  }
}

function send(){
  location.assign("create.html")

}

function clearCreate(){
  document.getElementById("createUser").value = "";
  document.getElementById("createPass").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
}

function borrowpg(){
  location.assign("borrow.html")

}

function lendpg(){
  location.assign("lend.html")

}

function homepg(){
  location.replace("create.html")
  validate();
}
