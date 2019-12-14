import React from 'react'
import AudioPlayer from 'react-audioplaylist'

const Player = props => {
    const tracks = props.tracks
    return <AudioPlayer data={{tracks}} />
}


export default Player