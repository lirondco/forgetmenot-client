import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ListsPage from './ListsPage'

describe(`ListsPage component`, () => {
  it('renders a .ListsPage by default', () => {
    const wrapper = shallow(<ListsPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders an list in an IdeaListItem for each lists in array', () => {

    const context = {
      lists: [
        {
          "id": 1,
          "name": "List 1",
          "modified": "2019-01-03T00:00:00.000Z",
          "number_of_ideas": 12
        },
        {
          "id": 2,
          "name": "List 2",
          "modified": "2018-08-15T23:00:00.000Z",
          "number_of_ideas": 11
        },
        {
          "id": 3,
          "name": "List 3",
          "modified": "2018-03-01T00:00:00.000Z",
          "number_of_ideas": 0
        },
        {
          "id": 4,
          "name": "List 4",
          "modified": "2019-01-04T00:00:00.000Z",
          "number_of_ideas": 5
        },
      ]
    }
    const IdeasListItem = shallow(<ListsPage />, context)
      .find('IdeasListItem')
    expect(toJson(IdeasListItem)).toMatchSnapshot()
  })
})