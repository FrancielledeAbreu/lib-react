import React from 'react'
import { Modal } from '.'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Modal', () => {
  it('should open the modal', () => {
    const wrapper = shallow(<Modal />)
    const modal = wrapper.find('div div')
    expect(wrapper.find(Modal)).to.have.lengthOf(1)
  })
})
