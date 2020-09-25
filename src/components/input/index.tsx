import * as React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { InputStyle, ButtonStyle, DivStyle } from './style'

interface InputProps {
  type: boolean
  onClick: () => void
  children: string
}

const Input = ({ type, onClick, children }: InputProps) => {
  return (
    <DivStyle>
      <InputStyle type={type ? 'text' : 'number'} placeholder='Type here' />
      <ButtonStyle onClick={onClick}>
        {children === 'search' ? <BiSearchAlt /> : children}
      </ButtonStyle>
    </DivStyle>
  )
}

export default Input
