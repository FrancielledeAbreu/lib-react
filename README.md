# lib-kenzie

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/lib-kenzie.svg)](https://www.npmjs.com/package/lib-kenzie) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lib-kenzie
```

## Usage

```tsx
import React, { Component } from 'react'
import { Input, Checkbox, Typography, Card, DropNotifierActions, ButtomTop, Modal } from 'lib-kenzie'

import 'lib-kenzie/dist/index.css'

class Example extends Component {
  render() {
    return (
      <>
        <Input type={true} click={() => {}} children='search' />
        <Checkbox inputCheck={['String-one', 'String-two']} children='Hello' />
        <ButtomTop />
        <Card />
        <DropNotifierActions
          onClick={() => {
            /*callback function here*/
          }}
          visibility={/* boolean */}
        >
          //children here
        </DropNotifierActions>
        <Typography value={1} label='Hello World!' />
        <Modal isOpen={true} onClose={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat leo non purus sodales
        congue. Vestibulum elit dui, venenatis vel iaculis et, fringilla vitae lectus. Praesent
        vitae est in elit imperdiet suscipit a vel libero. Morbi luctus maximus tortor in convallis.
        Pellentesque fermentum non lorem vitae accumsan. Vivamus laoreet quis arcu ut mollis. Aenean
        pretium metus leo, a scelerisque lorem lacinia at. Aenean ac interdum tortor, id mollis
        nibh. Nullam tristique vestibulum nunc vel aliquet. Phasellus dolor augue, molestie vel
        mauris eget, auctor lobortis dui. Etiam hendrerit semper mauris eget lacinia. Nullam
        fringilla augue ut euismod lacinia. Nunc quis ligula ut mauris faucibus pretium. Aliquam nec
        cursus est. Integer eu fringilla lectus.
      </Modal>
    )
  }
}
```

## Props Input

\*Type - boolean values only, when true the input will receive type text, however if it is false it will receive type number.

\*Click - function that will be called when the button is clicked

\*Children - The button label, default is a search icon (string === 'search'), however an string can be send to the button label.

## Props Checkbox

\*inputCheck - array that allows only string elements, which will be the labels for each input type checkbox, so array.length is equivalent to the amount of inputs

\*children - will be the section title, rendered inside an h2 tag

## ButtomTop

\*ButtomTop - is a buttom, when you click, leave you to top of the page.

## Props Typography

\*value - Props type number to render the heading tag according to the send value type, for example if the value is 1 the Typography will be composed by the H1 tag.

\*label - Receives a string or React.ReactNode, which will correspond to the content of the heading tag

## Props Card

\*Children - can receive any ReactNode.

## Props DropNotifierActions

\*visibility -show and hide the alert.

\*onClick - function that will be called when the close button is clicked

\*Children - can receive any ReactNode.

## Props Modal

\*isOpen - accepts a boolean value that open and close the Modal. If it's true, the modal will appear, otherwise it will disappear
\*onClose - accepts a boolean value that show the closing button. If it's true, the button will appear, otherwise it will disappear
\*Children - Can receive any ReactNode

## License
