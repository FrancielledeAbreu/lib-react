import * as React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const backTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const ButtomTop = () => {
  return (
    <button onClick={() => backTop()}>
      <AiOutlineArrowUp />
    </button>
  )
}

export default ButtomTop
