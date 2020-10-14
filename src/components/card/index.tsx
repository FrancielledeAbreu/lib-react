import React from 'react'
import { Wrap, Container } from './style'
interface Props {
  children?: React.ReactNode
  styles?: string
}

const Card = ({ children, styles }: Props) => {
  return (
    <Wrap styles={styles}>
      <Container>{children}</Container>
    </Wrap>
  )
}

export default Card
