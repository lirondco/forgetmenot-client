import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import IdeaListItem from './IdeaListItem'

describe(`List component`, () => {
  const props = {
    list: {
        id: 3,
        name: 'testname',
        number_of_ideas: 4
    }
  }


  it('renders the list given props', () => {
    const wrapper = shallow(<IdeaListItem {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('button works when clicked', () => {
    const wrapper = shallow(<IdeaListItem {...props} />)
    wrapper.find('button').simulate('click', { preventDefault() {}})
})

})