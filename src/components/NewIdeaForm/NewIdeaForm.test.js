import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NewIdeaForm from './NewIdeaForm'

describe(`NewIdeaForm component`, () => {
  const stubLists = [
    {
      "id": 1,
      "name": "Test A"
    },
    {
      "id": 2,
      "name": "Test B"
    },
    {
      "id": 3,
      "name": "Test C"
    }
  ]


  it('renders the complete form', () => {
    const context = { clearError: () => {} }
    const wrapper = shallow(<NewIdeaForm />, context)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the select options from lists', () => {
    const context = stubLists
    const select = shallow(<NewIdeaForm />, context)
      .find('#list')
    expect(toJson(select)).toMatchSnapshot()
  })
})
