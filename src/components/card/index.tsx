import React from 'react'
import { Wrap, Container } from './style'
interface Props {
  children?: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  )
}

export default Card
