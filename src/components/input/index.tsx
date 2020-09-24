import * as React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { InputStyle, ButtonStyle, DivStyle } from './style'

interface InputProps {
  type: boolean
  click: () => void
  children: string
}

const Input = ({ type, click, children }: InputProps) => {
  return (
    <DivStyle>
      <InputStyle type={type ? 'text' : 'number'} placeholder='Type here' />
      <ButtonStyle onClick={click}>
        {children === 'search' ? <BiSearchAlt /> : children}
      </ButtonStyle>
    </DivStyle>
  )
}

export default Input
