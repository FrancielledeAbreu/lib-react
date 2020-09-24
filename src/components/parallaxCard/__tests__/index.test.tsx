import React from 'react'
import renderer from 'react-test-renderer'
import ParallaxCard from '../../../containers/parallaxCard'

describe('Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ParallaxCard />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('Events', () => {
  // teste para fazer o movimento do mouse por cima
  // it('button onClick ', () => {
  // //
  // })
})
