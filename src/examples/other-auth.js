function sendLink(emailAddress) {
  console.log("emailLogin called!");

  const actionCodeSettings = {
    url: "http://localhost:5000",
    handleCodeInApp: true
  };

  firebase
    .auth()
    .sendSignInLinkToEmail(emailAddress, actionCodeSettings)
    .then(function(success) {
      window.localStorage.setItem("emailForSignIn", emailAddress);
      alert("Email sent!");
    })
    .catch(function(error) {
      console.log("Error === ", error);
      alert("Action failed!");
    });
}

function anonymousLogin() {
  console.log("anonymousLogin called!");
  firebase
    .auth()
    .signInAnonymously()
    .then(function() {
      alert("OK");
    })
    .catch(function(error) {
      console.log("Error ==== ", error);
      alert("Something wrong!");
    });
}

function numberLogin(phoneNumber) {
  console.log("numberLogin called!");
  var appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-security");

  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmationResult => {
      var code = window.prompt("Please, enter the 6 digit code!");
      return confirmationResult.confirm(code);
    })
    .then(resut => {
      document.getElementById("recaptcha-security").innerHTML = "Authenticated";
    })
    .catch(error => {
      console.log("Error ===== ", error);
      document.getElementById("recaptcha-security").innerHTML =
        "Not authenticated";
    });
}
