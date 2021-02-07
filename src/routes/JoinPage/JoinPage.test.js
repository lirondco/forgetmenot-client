import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import JoinPage from './JoinPage'

describe(`JoinPage component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<JoinPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})