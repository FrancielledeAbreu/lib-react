import * as React from 'react'
import { ModalDiv, Overlay } from './style'

interface Props {
  children?: string | React.ReactNode
  isOpen: boolean
}

const Modal = ({ children, isOpen }: Props) => {
  return (
    <div>
      {isOpen && (
        <Overlay>
          <ModalDiv>{children}</ModalDiv>
        </Overlay>
      )}
    </div>
  )
}

export default Modal
