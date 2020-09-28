import React, { useState } from 'react'
import { AiOutlineAlert } from 'react-icons/ai';

import { Input, Typography, Modal, DropNotifierActions, HoverButton, Card, Checkbox } from 'lib-kenzie'

const App = () => {

  const [notify, setNotify] = useState(false)

  const handleClick = () => {
    return console.log('Hello')
  }


  return (
    <div>
      <Card />
      <DropNotifierActions onClick={() => setNotify(!notify)} visibility={notify}>
        <p>O dados estão imcompletos
           por favor preenche-los</p>
      </DropNotifierActions>
      <Input type={true} onClick={handleClick} children='search' />
      <Typography value={1} label='Hello World!' />
      <Modal isOpen={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat leo
        non purus sodales congue. Vestibulum elit dui, venenatis vel iaculis et,
        fringilla vitae lectus. Praesent vitae est in elit imperdiet suscipit a
        vel libero. Morbi luctus maximus tortor in convallis. Pellentesque
        fermentum non lorem vitae accumsan. Vivamus laoreet quis arcu ut mollis.
        Aenean pretium metus leo, a scelerisque lorem lacinia at. Aenean ac
        interdum tortor, id mollis nibh. Nullam tristique vestibulum nunc vel
        aliquet. Phasellus dolor augue, molestie vel mauris eget, auctor
        lobortis dui. Etiam hendrerit semper mauris eget lacinia. Nullam
        fringilla augue ut euismod lacinia. Nunc quis ligula ut mauris faucibus
        pretium. Aliquam nec cursus est. Integer eu fringilla lectus.
      </Modal>
      <HoverButton onClick={() => setNotify(!notify)}>
        <AiOutlineAlert />
        <p>Alert</p>
      </HoverButton>
      <Checkbox
        inputCheck={['String-one', 'String-two', 'String-{...}']}
        children='Hello Lib-Kenzie'
      />
    </div>
  )
}

export default App
