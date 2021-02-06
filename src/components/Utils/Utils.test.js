import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Hyph, Button, Textarea, Input, Required, Section } from './Utils'

describe(`Utils components`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a hyphen when Hyph is called', () => {
    const wrapper = shallow(<Hyph />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('button renders when called', () => {
    const wrapper = shallow(<Button {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('button works when clicked', () => {
      const wrapper = shallow(<Button {...props} />)
      wrapper.find('button').simulate('click', { preventDefault() {}})
  })

  it('textarea renders when called', () => {
      const wrapper = shallow(<Textarea {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('input renders when called', () => {
      const wrapper = shallow(<Input {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('required renders when called', () => {
      const wrapper = shallow(<Required {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('section renders when called', () => {
      const wrapper = shallow(<Section {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
  })
})
