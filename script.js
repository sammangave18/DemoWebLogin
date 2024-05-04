// var uname = document.getElementById("username").value;
// var pw = document.getElementById("pass").value;

// function login(uname, pw) {
//     if (uname === "" || pw === "") {
//       alert("Please enter both a username and pass");
//     } else {
//       alert("Your Logged in successfully!");
//     }
//   }
  
//   function reset() {
//     document.getElementById("username").value = "";
//     document.getElementById("pass").value = "";
//   }
  
//   document.getElementById("loginBtn").addEventListener("click", function () {
//     var uname = document.getElementById("username").value;
//     var pw = document.getElementById("pass").value;
//     login(uname, pw);
//   });
  
//   document.getElementById("resetBtn").addEventListener("click", function () {
//     reset();
//   });

document.addEventListener("DOMContentLoaded", function() {
    // Put your JavaScript code here
    function login(uname, pw) {
      if (uname === "" || pw === "") {
        alert("Please enter both a username and pass");
      } else {
        alert("Your Logged in successfully!");
      }
    }

    function reset() {
      document.getElementById("username").value = "";
      document.getElementById("pass").value = "";
    }

    document.getElementById("loginBtn").addEventListener("click", function () {
      var uname = document.getElementById("username").value;
      var pw = document.getElementById("pass").value;
      login(uname, pw);
    });

    document.getElementById("resetBtn").addEventListener("click", function () {
      reset();
    });
});

  
