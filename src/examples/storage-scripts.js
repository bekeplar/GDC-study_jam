function uploadFile(url) {
  console.log("UPLOAD-FILE called!");
  var storageReference = firebase.storage().ref();
  var file = document.getElementById("customFile").files[0];

  var metaData = {
    contentType: "image/jpeg",
    cacheControl: "public,max-age=300"
  };

  storageReference
    .child("images/nature/" + file.name)
    .put(file, metaData)
    .then(result => {
      console.log("Image uploaded!");
      alert("File uploaded!");
    })
    .catch(error => {
      console.log("Error ==== ", error);
      alert("Something went wrong!");
    });
}

function showFile() {
  console.log("SHOW-FILE called!");
  var storageReference = firebase.storage().ref();
  storageReference
    .child("images/nature/earth.jpg")
    .getDownloadURL()
    .then(url => {
      var img = document.getElementById("myimg");
      img.src = url;
    })
    .catch(error => {
      alert("Something went wrong!");
      console.log("Error === ", error);
    });
}

function deleteFile() {
  console.log("DELETE-FILE called!");
  var storageReference = firebase.storage().ref();
  storageReference
    .child("images/nature/earth.jpg")
    .delete()
    .then(response => {
      var img = document.getElementById("myimg");
      img.src = "";
      alert("Image deleted");
    })
    .catch(error => {
      alert("Something went wrong!");
      console.log("Error === ", error);
    });
}

function getAllFiles() {
  console.log("GET-ALL-FILES called!");
}
