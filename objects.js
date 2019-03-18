var playlist = {
  artistName: "songTitle"
};

function updatePlaylist(playlist, artistName, songTitle) {
  /*Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist*/
  playlist[artistName] = songTitle
  return playlist
}
