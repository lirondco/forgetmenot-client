import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NotFoundPage from './NotFoundPage'

describe(`NotFoundPage component`, () => {
  it('renders the complete error message', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})