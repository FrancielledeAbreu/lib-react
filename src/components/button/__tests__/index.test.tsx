import React from 'react'
import renderer from 'react-test-renderer'
import HoverButton from '../index'
import { shallow } from 'enzyme'

describe('Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <HoverButton>
          <p>Teste</p>
        </HoverButton>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('Events', () => {
  it('button onClick ', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(
      <HoverButton onClick={onButtonClick}>Teste</HoverButton>
    )
    wrapper.simulate('click')

    expect(onButtonClick).toHaveBeenCalled()
  })
})
