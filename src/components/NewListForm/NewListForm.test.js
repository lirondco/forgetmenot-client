import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NewListForm from './NewListForm'

describe(`NewListForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<NewListForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})