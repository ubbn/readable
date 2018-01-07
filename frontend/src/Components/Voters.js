import React from 'react';
import FontIconButton from './FontIconButton'

const upVote = {
  option: 'upVote'
}

const downVote = {
  option: 'downVote'
}

const clicked = (e, onVote, id, vote) => {
  e.preventDefault()
  onVote && onVote(id, vote)
}

const Voters = (props) => {
  const {onVote, score, id, showScore} = props
  return (
    <div>
      {showScore &&
        <small>{score > 0 ? '+' + score : score}{' '}</small>
      }
      <FontIconButton onClick={e => clicked(e, onVote, id, upVote)} name="thumb_up" />
      <FontIconButton onClick={e => clicked(e, onVote, id, downVote)} name="thumb_down" />
    </div>
  );
}

export default Voters
