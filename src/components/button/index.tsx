import React from 'react'
import { Button } from './style'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  size?: number
}

const HoverButton = ({ children, onClick, size }: Props) => {
  return (
    <Button onClick={onClick} size={size}>
      {children}
    </Button>
  )
}

export default HoverButton
