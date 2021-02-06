import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './Home'

describe(`Home component`, () => {
  it('renders the home page', () => {
    const wrapper = shallow(<Home />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})