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

import InputAction from 'lib-kenzie'
import 'lib-kenzie/dist/index.css'

class Example extends Component {
  render() {
    return <InputAction type={true} click={() => {}} children='search' />
  }
}
```

## Props

\*Type - boolean values only, when true the input will receive type text, however if it is false it will receive type number.

\*Click - function that will be called when the button is clicked

\*Children - The button label, default is a search icon (string === 'search'), however an string can be send to the button label.

## License

MIT © [https://gitlab.com/alanpires](https://github.com/https://gitlab.com/alanpires)
