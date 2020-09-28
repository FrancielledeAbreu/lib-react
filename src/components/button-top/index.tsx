import * as React from 'react'

const backTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const buttomStyle = {
  backgroundColor: '#008CBA',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer'
}

const ButtomTop = () => {
  return (
    <button style={buttomStyle} onClick={() => backTop()}>
      UP
    </button>
  )
}

export default ButtomTop
