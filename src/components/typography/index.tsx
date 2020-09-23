import * as React from 'react'

interface Props {
  value: number
}

const Typography = ({ value }: Props) => {
  return <div>{value}</div>
}

export default Typography