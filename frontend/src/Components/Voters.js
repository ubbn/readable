import React from 'react';
import IconButton from './IconButton'

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
      <IconButton onClick={e => clicked(e, onVote, id, upVote)} name="thumb_up" />
      <IconButton onClick={e => clicked(e, onVote, id, downVote)} name="thumb_down" />
    </div>
  );
}

export default Voters
