import * as React from 'react'
import { ModalDiv, Overlay, ButtonModal, ButtonDiv } from './style'

interface Props {
  children?: string | React.ReactNode
  isOpen: boolean
}

const Modal = ({ children, isOpen }: Props) => {
  const closeModal = () => {
    isOpen = false
  }

  return (
    <div>
      {isOpen && (
        <Overlay>
          <ModalDiv>
            <ButtonDiv>
              <ButtonModal onClick={closeModal}>X</ButtonModal>
            </ButtonDiv>
            {children}
          </ModalDiv>
        </Overlay>
      )}
    </div>
  )
}

export default Modal
