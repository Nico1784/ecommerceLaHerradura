import React from 'react'
import "./Alert.css"





function Alert({texto}) {
  return (
    <div className='alert'>{texto}</div>
  )
}

export default Alert