import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HomePage from './HomePage'

describe(`HomePage component`, () => {
  it('renders the home page', () => {
    const wrapper = shallow(<HomePage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})