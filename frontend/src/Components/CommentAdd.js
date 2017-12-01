import React from 'react';

class CommentAdd extends React.Component {

  onSubmit = (e) => {
    e.preventDefault()
    alert(33)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <textarea type="text" placeholder="comment"/>
        </div>
        <div>
          <input type="submit" value="Add comment"/>  
        </div>
      </form>
    )
  }
}

export default CommentAdd
