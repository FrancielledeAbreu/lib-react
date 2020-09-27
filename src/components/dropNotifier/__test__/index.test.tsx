import React from 'react'
import renderer from 'react-test-renderer'
import DropNotifier from '../index'

describe('Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DropNotifier />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
