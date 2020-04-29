const signInGoogle = () => {
  console.log("signInGoogle called...");
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      alert("User authenticated");
      var user = result.user;
      console.log("User ======= ", user);
    })
    .catch(function(error) {
      alert("Authentication failed!");
    });
}

const signInFacebook = () => {
  console.log("signInFacebook called...");
  var provider = new firebase.auth.FacebookAuthProvider();
  // provider.addScope("user_bithday");

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      alert("User authenticated");
      var user = result.user;
      console.log("User ======= ", user);
    })
    .catch(function(error) {
      alert("Authentication failed!");
      console.log("Error: ", error.message);
    });
}

const signInTwitter = () => {
  console.log("signInTwitter called...");
  var provider = new firebase.auth.TwitterAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      alert("User authenticated");
      var user = result.user;
      console.log("User ======= ", user);
    })
    .catch(function(error) {
      alert("Authentication failed!");
      console.log("Error: ", error.message);
    });
}

const signInGithub = () => {
  console.log("signInGithub called...");
  var provider = new firebase.auth.GithubAuthProvider();
  // provider.addScope('repo');

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      alert("User authenticated");
      var user = result.user;
      console.log("User ======= ", user);
    })
    .catch(function(error) {
      alert("Authentication failed!");
      console.log("Error: ", error.message);
    });

}
