import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import IdeasPage from './IdeasPage'

describe(`IdeasPage component`, () => {
  it('renders a .IdeasPage by default', () => {
    const wrapper = shallow(<IdeasPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders an Idea in an accordion for each ideas in array', () => {
    const props = {
      match: {
        params: {
          listId: 1
        }
      }
    }
    const context = {
      ideas: [
        {
          "id": 1,
          "name": "Idea 1",
          "modified": "2019-01-03T00:00:00.000Z",
          "list_id": 2,
          "content": "Corporis accusamus placeat.\n \rUnde."
        },
        {
          "id": 2,
          "name": "Idea 2",
          "modified": "2018-08-15T23:00:00.000Z",
          "folderId": 1,
          "content": "Eos\n \rlaudantium."
        },
        {
          "id": 3,
          "name": "Idea 3",
          "modified": "2018-03-01T00:00:00.000Z",
          "folderId": 1,
          "content": "Occaecati dignissimos\nvoluptatum nihil."
        },
        {
          "id": 4,
          "name": "Idea 4",
          "modified": "2019-01-04T00:00:00.000Z",
          "folderId": 5,
          "content": "Eum culpa odit."
        },
      ]
    }
    const Accordion = shallow(<IdeasPage {...props} />, context)
      .find('Accordion')
    expect(toJson(Accordion)).toMatchSnapshot()
  })
})