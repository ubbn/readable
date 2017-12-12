import React from 'react';

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
  const {onVote, score, id} = props
  return (
    <div>
      <small>{score > 0 ? '+' + score : score}</small>{' '}
      <button onClick={e => clicked(e, onVote, id, upVote)}>+</button>
      <button onClick={e => clicked(e, onVote, id, downVote)}>–</button>
    </div>
  );
}

export default Voters
