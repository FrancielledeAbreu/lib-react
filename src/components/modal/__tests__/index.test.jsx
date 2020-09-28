import React from 'react'
import Modal from '..'
import renderer from 'react-test-renderer'

describe('Modal Test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Modal isOpen={false} children='Teste' />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly true', () => {
    const tree = renderer.create(<Modal isOpen children='Teste' />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
