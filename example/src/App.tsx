import React from 'react'
import styled from 'styled-components';
import { BsBookmarkPlus, BsBookmarkFill, BsBookmarkCheck } from 'react-icons/bs';


import { HoverButton, DropNotifier, ParallaxCard } from 'lib-kenzie'
import 'lib-kenzie/dist/index.css'

const App = () => {

  const handleOnClick = () => console.log("funcionou")
  return (
    <Container>
      <DropNotifier />
      <HoverButton onClick={handleOnClick}>
        <p>Click aqui</p>
        <BsBookmarkPlus />
      </HoverButton>
      <HoverButton onClick={handleOnClick}>
        <BsBookmarkFill />
        <p>Adicionar amigo</p>
      </HoverButton>
      <HoverButton onClick={handleOnClick}>
        <BsBookmarkCheck />
        <p>Avaliar conteudo</p>
      </HoverButton>
      <ParallaxCard />
    </Container>

  )
}

export default App

const Container = styled.div`
width: 100vw;
height: 100vh;
display:flex;
align-items:center;
justify-content:center;
`
