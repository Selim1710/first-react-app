import React from 'react'
import ReactDOM from 'react-dom'

function Test() {
  return ReactDOM.createPortal(
    <div><h1>Test</h1></div>,
    document.getElementById('test')
  )
}

export default Test
