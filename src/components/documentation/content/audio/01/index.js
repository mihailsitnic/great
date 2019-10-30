import React from 'react';
import AudioPlayer from 'react-audioplaylist'
import { connect } from 'react-redux'

const Player1 = props => {
  const tracks = props.data.a.audio.player1
  return (
    <div>
      <h2 className="title-h2">Исповедальные проповеди</h2>
      <AudioPlayer data={{tracks}} />
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.selectorData
})

export default connect(mapStateToProps)(Player1)