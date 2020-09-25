import React from 'react'

import { Input, Typography } from 'lib-kenzie'
import 'lib-kenzie/dist/index.css'

const App = () => {
  const HandleClick = () => {
    return console.log('Hello')
  }

  return (
    <div>
      <Input type={true} onClick={HandleClick} children='search' />
      <Typography value={1} label='Hello World!' />
    </div>
  )
}

export default App
