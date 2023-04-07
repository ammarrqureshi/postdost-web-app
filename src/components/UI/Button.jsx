import React from 'react'

const Button = ( props ) => {
  return (
    <div>
    <button onClick={props.onClick} value={props.value}>{props.children}</button>
    </div>
  )
}

export default Button