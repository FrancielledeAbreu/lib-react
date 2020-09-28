import styled from 'styled-components'

interface newProps {
  size: number | undefined
}

export const Button = styled.button<newProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  padding: 2px;
  border-radius: 30%;
  transition: 0.3s;
  background: rgb(0, 209, 178);
  p {
    display: none;
    color: white;
  }
  svg {
    transition: 0.2s;
    width: 15px;
    height: 15px;
    color: white;
  }
  @media (min-width: 732px) {
    margin: 0 5px 0 5px;
    svg {
      transition: 0.2s;
      width: 100%;
      height: 100%;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2px;
      font-size: 0px;
      font-weight: bold;
      height: 100%;
      visibility: hidden;
      transition: 0.2s;
    }
    &:hover {
      border-radius: 10%;
      width: 90px;
      height: 50px;
      padding: 5px;
    }
    &:hover p {
      font-size: 10px;
      transition: 0.2s 0.1s;
      width: 40px;
      visibility: visible;
    }
  }
  &:focus,
  &:active {
    outline: none !important;
  }
`
