import React from 'react'
import styled from 'styled-components'
import { IoMdAlert } from 'react-icons/io'
import { GrFormClose } from 'react-icons/gr'

interface Props {
  children?: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
}

const DropNotifier = ({ children, onClick, icon }: Props) => {
  return (
    <AlertBox>
      <AlertIcon>{icon || <IoMdAlert />}</AlertIcon>
      <TextBox>{children}</TextBox>
      <CloseBox onClick={onClick}>
        <GrFormClose />
      </CloseBox>
    </AlertBox>
  )
}

export default DropNotifier

export const AlertBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 0;
  background: #ffdb9d;
  border-left: 8px solid #ffa502;
  padding: 20px 40px;
  min-width: 400px;
  min-height: 100px;
`
export const AlertIcon = styled.div`
  width: 66px;
  height: 100%;
  background: blue;
`
export const CloseBox = styled.div`
  width: 66px;
  height: 100%;
  background: green;
`
export const TextBox = styled.div`
  width: 66px;
  height: 100%;
  background: whitesmoke;
`
