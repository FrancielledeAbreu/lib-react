import * as React from 'react'
import { ButtomStyle } from './style'

const ButtomTop = () => {
  const backTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return <ButtomStyle onClick={backTop}>UP</ButtomStyle>
}

export default ButtomTop
