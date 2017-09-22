var playlist = {
  ABBA: "Mamma Mia", 
  U2: "Beautiful Day"
}

function updatePlaylist({obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

updatePlaylist(playlist, "Van Halen", "Aint Talkin bout Love")
