import styled from 'styled-components'
interface Props {
  visibility?: boolean
}

export const AlertBox = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffdb9d;
  padding: 20px 40px;
  min-width: 420px;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 4px;
  border-left: 8px solid #ffa502;
  animation: hide_slide 1s ease forwards;
  transition: visibility 3s;
  visibility: hidden;
  ${({ visibility }) =>
    visibility &&
    `
    visibility: visible;
    animation: show_slide 1s ease forwards;
    right: 10px;

`}

  @keyframes show_slide {
    0% {
      transform: translateX(100%);
    }
    40% {
      transform: translateX(-10%);
    }
    80% {
      transform: translateX(0%);
    }
    100% {
      right: 10px;
    }
  }
  @keyframes hide_slide {
    0% {
      right: 10px;
    }
    40% {
      transform: translateX(0%);
    }
    80% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(110%);
    }
  }
`
export const AlertIcon = styled.div`
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ce8500;
  font-size: 30px;
`
export const CloseBox = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #ffd080;
  padding: 20px 18px;
  right: 0;
  height: calc(100% - 40px);
  transition: 0.2s;
  svg {
    font-size: 22px;
    transition: 0.2s;
  }
  path {
    stroke: #ce8500;
  }
  &:hover {
    background: #ffc769;
  }
  &:hover svg {
    font-size: 30px;
  }
  pointer-events: none;
  ${({ visibility }) =>
    visibility &&
    `
    pointer-events: all;

    `}
`
export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  padding: 0 20px;
  font-size: 18px;
  color: #ce8500;
`
