import React from 'react'
import Typography from '../index'
import renderer from 'react-test-renderer';

it("renders correctly", () => {
    const tree = renderer.create(<Typography value="" label/>).toJSON()

    expect(tree).toMatchSnapshot()
})