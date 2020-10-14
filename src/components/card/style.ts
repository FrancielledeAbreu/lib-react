import styled from 'styled-components'

interface Props {
  styles?: string
}

export const Wrap = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6rem;
  width: 250px;
  height: 300px;
  margin: 100px;
  box-shadow: 0 0 3rem 0.3rem hsla(0, 0%, 0%, 0.3);

  ${({ styles }) => `${styles}`}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  width: 100%;
  height: 100%;

  .container-active {
    transition: none;
  }
`
