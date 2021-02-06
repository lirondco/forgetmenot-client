import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Section } from '../../components/Utils/Utils'
import Home from '../../components/Home/Home'
import ListsPage from '../ListsPage/ListsPage'

export default class HomePage extends Component {
  render() {
    return (
    <Section className = "homepage">
        {TokenService.hasAuthToken()
          ? <ListsPage />
          : <Home /> }
    </Section>
    )
  }
}