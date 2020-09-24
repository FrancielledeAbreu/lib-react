import React from 'react'
import Input from '../index'
import renderer from 'react-test-renderer'

describe('Input Test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Input type={false} click={() => {}} children='' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly true', () => {
    const types = true
    const tree = renderer
      .create(<Input type={types} click={() => {}} children='search' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
