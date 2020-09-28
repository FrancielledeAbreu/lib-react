import React from 'react'
import ButtomTop from '../index'
import renderer from 'react-test-renderer'

describe('Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtomTop />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
