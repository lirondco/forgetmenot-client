import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import Join from '../../components/Join/Join'
import './JoinPage.css'

export default class JoinPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <h2 className="register_header">Register</h2>
        <Join
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}