import React from 'react'
import InputAction from '../index'
import renderer from 'react-test-renderer'

describe('InputAction Test', () => {
  it('renders correctly', () => {
    const types = true
    const tree = renderer
      .create(<InputAction type={types} click={() => {}} children='text' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly false', () => {
    const tree = renderer
      .create(<InputAction type={false} click={() => {}} children='search' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
