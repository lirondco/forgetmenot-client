import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Hyph } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import IdeasContext from '../../contexts/IdeasContext'
import './NavBar.css'

export default class NavBar extends Component {
  static contextType = IdeasContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.toggleLoggedIn()
    console.log(this.context.loggedIn, "context logged in")
  }

  renderLogoutLink() {
//should render log out 
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <Hyph />
        <Link to='/help'>
           Help 
        </Link>
      </div>
    )
  }

  renderLoginLink() {
//should render without logout
    return (
      <div className='Header__not-logged-in'>
        <Link to='/'>
          About
        </Link>
        <Hyph />
        <Link to='/login'>
          Login
        </Link>
        <Hyph />
        <Link to='/join'>
          Register
        </Link>
        <Hyph />
        <Link to='/help'>
           Help 
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1 className="app_name">
          <Link to='/'>
            {' '}
            ForgetMeNot
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}
