import React from 'react'
import DropNotifierActions from '../index'
import { shallow } from 'enzyme'

describe('Events', () => {
  it('notifier onClick ', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(
      <DropNotifierActions onClick={onButtonClick} visibility={false}>
        <p>Teste</p>
      </DropNotifierActions>
    )
    wrapper.simulate('click')

    expect(onButtonClick).toHaveBeenCalled()
  })
})
