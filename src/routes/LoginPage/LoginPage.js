import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import { Section } from '../../components/Utils/Utils'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2 className="login_page">Login</h2>
        <Login
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}