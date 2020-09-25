import React from 'react'
import { Modal } from '../modal'
import renderer from 'react-test-renderer'

describe('Modal Test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Modal isOpen={false} children='' />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly true', () => {
    const isOpen = true
    const tree = renderer
      .create(<Modal isOpen={isOpen} children='Teste' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
