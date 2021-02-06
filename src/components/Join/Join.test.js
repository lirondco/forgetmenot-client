import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Join from './Join'

describe(`Join component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<Join />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})