import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NewIdeaPage from './NewIdeaPage'

describe(`NewIdeaPage component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<NewIdeaPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})