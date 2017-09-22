var playlist = new Object({
  ABBA: "Mamma Mia",
  U2: "Beautiful Day"
});

function updatePlaylist({playlist, key, value){
  return Object.assign({}, obj, {[key]:value})
}

//updatePlaylist(playlist, "Van Halen", "Aint Talkin bout Love")
