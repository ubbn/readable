import React from 'react'
import FontIcon from 'material-ui/FontIcon'

const IconButton = (props) => {
  const {onClick, name} = props
  
  return (
    <a href="">
      <FontIcon className="material-icons" onClick={onClick}>
        {name}
      </FontIcon>
    </a>
  )
}

export default IconButton