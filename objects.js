var playlist = new Object({
  ABBA: "Mamma Mia",
  U2: "Beautiful Day"
});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]:songTitle})
}

//updatePlaylist(playlist, "Van Halen", "Aint Talkin bout Love")

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
