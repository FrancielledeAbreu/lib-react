import * as React from 'react'
import Input from '../../components/input'

interface Props {
  type: boolean
  click: () => void
  children: string
}

const InputAction = ({ type, click, children }: Props) => {
  return <Input type={type} click={click} children={children} />
}

export default InputAction
