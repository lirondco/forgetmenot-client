import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import './NotFoundPage.css'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Section className='NotFoundPage'>
        <h2 className='error_title'>Four-Oh-Four Error - Uh oh!</h2>
        <p className='error_text'>I don't think this was supposed to happen. Please check your URL and try again</p>
      </Section>
    )
  }
}