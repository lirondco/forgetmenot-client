import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import IdeasContext from '../../contexts/IdeasContext'
import TokenService from '../../services/token-service'

//renders the registration page

export default class Join extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  static contextType = IdeasContext

  handleSubmit = ev => {
    //function to handle new user registrations
    ev.preventDefault()
    const { username, email, password } = ev.target

    this.setState({ error: "Processing ..." })
    AuthApiService.postUser({
      username: username.value,
      email: email.value,
      password: password.value,
    })
        .then(user => AuthApiService.postLogin({
          username: username.value,
          password: password.value,
        })
          .then(res => {
            TokenService.saveAuthToken(res.authToken)
            this.context.toggleLoggedIn()
            username.value = ''
            email.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
            this.setState({ error: null })
          })
    )
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div className='username'>
          <label htmlFor='RegistrationForm__username'>
            Username <Required />
          </label>
          <Input
            name='username'
            type='text'
            required
            id='RegistrationForm__username'>
          </Input>
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'>
            Email Address <Required />
          </label>
          <Input
            name='email'
            type='email'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
      </form>
    )
  }
}