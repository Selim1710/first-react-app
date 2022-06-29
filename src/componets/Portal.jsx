import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
  return ReactDOM.createPortal(
    <div className='text-center'><h3>React portal is used to create section div with different id</h3></div>,
    document.getElementById('react-portal')
  )
}

export default Portal