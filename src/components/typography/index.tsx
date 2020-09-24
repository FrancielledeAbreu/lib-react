import React from 'react'
import { StyledDiv } from './style'

interface Props {
  value: number
  label?: string | React.ReactNode
}

const Typography = ({ value, label }: Props) => {
  const Result = React.createElement(`h${value > 6 ? 6 : value}`, {
    children: label
  })

  return <StyledDiv>{Result}</StyledDiv>
}

export default Typography
