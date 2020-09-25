import React from 'react'
import Typography from '../index'
import renderer from 'react-test-renderer'

describe('Snapshot', () => {
  it('renders correctly when the value is 1', () => {
    const tree = renderer
      .create(<Typography value={1} label='Teste' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when the value is 2', () => {
    const tree = renderer
      .create(<Typography value={2} label='Teste' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when the value is 3', () => {
    const tree = renderer
      .create(<Typography value={3} label='Teste' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when the value is 4', () => {
    const tree = renderer
      .create(<Typography value={4} label='Teste' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when the value is 5', () => {
    const tree = renderer
      .create(<Typography value={5} label='Teste' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when the value is 6', () => {
    const tree = renderer
      .create(<Typography value={6} label='Teste' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('does not render higher than more six', () => {
    const tree = renderer
      .create(<Typography value={7} label='Teste' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
