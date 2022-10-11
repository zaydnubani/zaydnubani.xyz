import React from "react"
import SpotifyPlayer from "react-spotify-web-playback"

const Player = ({ accessToken, trackUri }) => {

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
    //   callback={state => {
    //     if (!state.isPlaying) setPlay(false)
    //   }}
      play={true}
      uris={trackUri}
    />
  )
}

export default Player