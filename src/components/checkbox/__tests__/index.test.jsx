import React from 'react'
import Checkbox from '../index'
import renderer from 'react-test-renderer'

describe('Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Checkbox inputCheck={['String-one', 'String-two']} children='Hello' />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders empty string', () => {
    const tree = renderer
      .create(
        <Checkbox inputCheck={['', '', '']} children='Hello Lib-Kenzie' />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
