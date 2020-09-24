import React from 'react'
import renderer from 'react-test-renderer'
import DropNotifier from '../index'
import { shallow } from 'enzyme'

describe('Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DropNotifier />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('Events', () => {
  // teste para aparecer a div
  // it('button onClick ', () => {
  // //
  // })
})
