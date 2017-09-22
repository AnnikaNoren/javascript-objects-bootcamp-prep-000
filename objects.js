var playlist = new Object({
  ABBA: "Mamma Mia",
  U2: "Beautiful Day"
});

function updatePlaylist(playlist, key, value){
  return Object.assign({}, playlist, {[key]:value})
}

//updatePlaylist(playlist, "Van Halen", "Aint Talkin bout Love")

function removeFromPlaylist(playlist, key){
  delete playlist.key;
  return playlist;
}