import React from 'react'
import Input from '../index'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Input type={false} onClick={() => {}} children='' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly true', () => {
    const tree = renderer
      .create(<Input type onClick={() => {}} children='search' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
