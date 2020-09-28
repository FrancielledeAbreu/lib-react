import * as React from 'react'
import { DivStyles } from './style'

interface Prop {
  inputCheck: string[]
  children: string
}

const Checkbox = ({ inputCheck, children }: Prop) => {
  return (
    <DivStyles>
      <h2>{children}</h2>
      {inputCheck.map((inputs, key) => (
        <label key={key} className='main'>
          {inputs}
          <input type='checkbox' />
          <span className='mark' />
        </label>
      ))}
    </DivStyles>
  )
}

export default Checkbox
