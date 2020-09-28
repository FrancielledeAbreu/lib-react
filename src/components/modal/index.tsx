import * as React from 'react'
import { ModalDiv, Overlay, ButtonModal, ButtonDiv } from './style'

interface Props {
  children?: string | React.ReactNode
  isOpen: boolean
  onClose: boolean
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  const closeModal = () => {
    isOpen = false
  }

  return (
    <div>
      {isOpen && (
        <Overlay>
          <ModalDiv>
            {onClose && (
              <ButtonDiv>
                <ButtonModal onClick={closeModal}>X</ButtonModal>
              </ButtonDiv>
            )}
            {children}
          </ModalDiv>
        </Overlay>
      )}
    </div>
  )
}

export default Modal
