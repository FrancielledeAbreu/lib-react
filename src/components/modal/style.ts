import styled from 'styled-components'

export const ModalDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40vw;
  padding: 100px;
  z-index: 1000;
  background-color: #fff;
  align-items: center;
  border-radius: 10px;
`

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const ButtonModal = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  margin-left: 750px;
  flex-direction: column;
`
