import styled from 'styled-components'

export const Wrap = styled.div`
  background: #61ffca;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 300px;
  margin: 30px 50px;
  transition: 1s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover div:after,
  :hover div:before {
    width: calc(100% - 0.95rem);
    height: calc(100% - 0.95rem);
    border-radius: 0.3em;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #61ffca;
  border-radius: 0.6rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50rem;
  box-shadow: 0 0 3rem 0.5rem hsla(0, 0%, 0%, 0.2);
  transition: 1s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
    rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px;

  &:before,
  :after {
    content: '';
    width: 1rem;
    height: 1rem;
    border: 1.2px solid #fff;
    position: absolute;
    z-index: 2;
    opacity: 0.3;
    transition: 0.3s;
  }

  &:before {
    top: 0.4rem;
    right: 0.4rem;
    border-bottom-width: 0;
    border-left-width: 0;
    border-radius: 0 0.3em 0 0;
  }
  &:after {
    bottom: 0.4rem;
    left: 0.4rem;
    border-top-width: 0;
    border-right-width: 0;
    border-radius: 0 0 0 0.3em;
  }

  .container-active {
    transition: none;
  }
`
