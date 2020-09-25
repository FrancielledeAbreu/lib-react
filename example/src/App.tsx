import React from 'react'
import { Input, Typography, Modal } from 'lib-kenzie'
// import 'lib-kenzie/dist/index.css'

const App = () => {
  const HandleClick = () => {
    return console.log('Hello')
  }

  return (
    <div>
      <Input type={true} onClick={HandleClick} children='search' />
      <Typography value={1} label='Hello World!' />
      <Modal isOpen={true}>
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
    </div>
  )
}

export default App
