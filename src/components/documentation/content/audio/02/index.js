import React from 'react';
import AudioPlayer from 'react-audioplaylist'
import { connect } from 'react-redux'

const Player2 = props => {
  const tracks = props.data.a.audio.player2
  return (
    <div>
      <h2 className="title-h2">Проповеди разных лет</h2>
      <AudioPlayer data={{tracks}} />
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.selectorData
})

export default connect(mapStateToProps)(Player2)