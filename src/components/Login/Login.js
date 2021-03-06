import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils.js'
import IdeasContext from '../../contexts/IdeasContext'
export default class LoginForm extends Component {

  //this component renders the user log in page
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  static contextType = IdeasContext

  state = { error: null }

  /* the following function verifies the user's credentials
  and creates the token key when successful    */

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: 'Processing ...' })
    const { username, password } = ev.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        this.setState({ error: null })
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
        this.context.toggleLoggedIn()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div className='username'>
          <label htmlFor='LoginForm__username'>
            Username
          </label>
          <Input
            required
            name='username'
            id='LoginForm__username'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
      </form>
    )
  }
}
