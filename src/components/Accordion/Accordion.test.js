import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'

describe(`List component`, () => {
  const props = {
    list: {
        title: "accordion title",
        content: "accordion content"
    }
  }

  it('renders an accordion by default', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the accordion given props', () => {
    const wrapper = shallow(<Accordion {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('button works when clicked', () => {
    const wrapper = shallow(<Accordion {...props} />)
    wrapper.find('button').simulate('click', { preventDefault() {}})
})

})