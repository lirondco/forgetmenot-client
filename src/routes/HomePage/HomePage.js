import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Section } from '../../components/Utils/Utils'
import ListsPage from '../ListsPage/ListsPage'
import About from '../../components/AboutHelp/About'

export default class HomePage extends Component {
  render() {
    return (
    <Section className = "homepage">
        {TokenService.hasAuthToken()
          ? <ListsPage />
          : <About /> }
    </Section>
    )
  }
}