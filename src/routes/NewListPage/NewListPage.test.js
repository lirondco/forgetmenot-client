import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NewListPage from './NewListPage'

describe(`NewListPage component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<NewListPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})