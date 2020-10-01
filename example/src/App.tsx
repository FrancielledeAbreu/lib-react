import React, { useState } from 'react'
import { AiOutlineAlert } from 'react-icons/ai'

import {
  Input,
  Typography,
  Modal,
  DropNotifierActions,
  HoverButton,
  Card,
  Checkbox,
  ButtomTop,
} from 'lib-kenzie'

const App = () => {
  const [notify, setNotify] = useState(false)

  const handleClick = () => {
    return console.log('Hello')
  }

  return (
    <div>
      <Card />
      <DropNotifierActions onClick={() => setNotify(!notify)} visibility={notify}>
        <p>O dados estão imcompletos por favor preenche-los</p>
      </DropNotifierActions>
      <Input type={true} onClick={handleClick} children='search' />
      <Typography value={1} label='Hello World!' />
      <Modal isOpen={true} onClose={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat leo non purus sodales
        congue. Vestibulum elit dui, venenatis vel iaculis et, fringilla vitae lectus. Praesent
        vitae est in elit imperdiet suscipit a vel libero. Morbi luctus maximus tortor in convallis.

      </Modal>
      <HoverButton onClick={() => setNotify(!notify)}>
        <AiOutlineAlert />
        <p>Alert</p>
      </HoverButton>
      <Checkbox
        inputCheck={['String-one', 'String-two', 'String-{...}']}
        children='Hello Lib-Kenzie'
      />
      <ButtomTop />
    </div>
  )
}

export default App
