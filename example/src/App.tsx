import React from 'react'

import { InputAction } from 'lib-kenzie'
import 'lib-kenzie/dist/index.css'

const App = () => {
  const HandleClick = () => {
    return console.log('Hello')
  }

  return <InputAction type={true} click={HandleClick} children='search' />
}

export default App
