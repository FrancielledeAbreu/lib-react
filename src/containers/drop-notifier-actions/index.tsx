import React from 'react'
import DropNotifier from '../../components/dropNotifier'

interface Props {
  children?: React.ReactNode
  visibility: boolean
  onClick: () => void
}

const DropNotifierActions = ({ children, onClick, visibility }: Props) => {
  if (visibility) {
    setTimeout(() => onClick(), 2000)
  }

  return (
    <DropNotifier onClick={onClick} visibility={visibility}>
      {children}
    </DropNotifier>
  )
}

export default DropNotifierActions
