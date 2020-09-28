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
import { Input, Checkbox, Typography, Card } from 'lib-kenzie'

import 'lib-kenzie/dist/index.css'

class Example extends Component {
  render() {
    return (
      <>
        <Input type={true} click={() => {}} children='search' />
        <Checkbox inputCheck={['String-one', 'String-two']} children='Hello' />
        <Typography value={1} label='Hello World!' />
        <Card />
      </>
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

## Props Typography

\*value - Props type number to render the heading tag according to the send value type, for example if the value is 1 the Typography will be composed by the H1 tag.

\*label - Receives a string or React.ReactNode, which will correspond to the content of the heading tag

## Props Card

\*Children - can receive any ReactNode.

## License

MIT © [https://gitlab.com/alanpires](https://github.com/https://gitlab.com/alanpires)
