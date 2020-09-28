import React from 'react'
import { IoMdAlert } from 'react-icons/io'
import { GrFormClose } from 'react-icons/gr'
import { AlertBox, AlertIcon, TextBox, CloseBox } from './style'
interface Props {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  visibility?: boolean
}

const DropNotifier = ({ children, onClick, visibility }: Props) => {
  return (
    <AlertBox visibility={visibility}>
      <AlertIcon>
        <IoMdAlert />
      </AlertIcon>
      <TextBox>{children}</TextBox>
      <CloseBox onClick={onClick} visibility={visibility}>
        <GrFormClose />
      </CloseBox>
    </AlertBox>
  )
}

export default DropNotifier
