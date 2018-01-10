import React from 'react'
import FontIcon from 'material-ui/FontIcon'

const FontIconButton = (props) => {
  const {onClick, name} = props
  
  return (
    <a href="">
      <FontIcon className="material-icons" onClick={onClick}>
        {name}
      </FontIcon>
    </a>
  )
}

export default FontIconButton