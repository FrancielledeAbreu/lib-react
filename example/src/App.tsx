import React from 'react'

import { Input } from 'lib-kenzie'
import 'lib-kenzie/dist/index.css'

const App = () => {
  const HandleClick = () => {
    return console.log('Hello')
  }

  return <Input type={true} onClick={HandleClick} children='search' />
}

export default App
