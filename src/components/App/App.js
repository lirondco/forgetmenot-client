import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LoginPage from '../../routes/LoginPage/LoginPage'
import JoinPage from '../../routes/JoinPage/JoinPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import HomePage from '../../routes/HomePage/HomePage'
import IdeasPage from '../../routes/IdeasPage/IdeasPage'
import './App.css'
import NewIdeaPage from '../../routes/NewIdeaPage/NewIdeaPage'
import NewListPage from '../../routes/NewListPage/NewListPage'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import About from '../AboutHelp/About'
import Help from '../AboutHelp/Help'

class App extends Component {

  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  } 



  render() {
    return (
      <ErrorComponent>
      <div className='App'>
        <header className='App__header'>
            <NavBar />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={HomePage}
            />
            <Route
              path={'/about'}
              component={About}
              />
            <Route
              path={'/help'}
              component={Help}
              />
            <PublicOnlyRoute
              path={'/login'}
              component = {LoginPage}
            />
            <PublicOnlyRoute
              path={'/join'}
              component={JoinPage}
            />
            <PrivateRoute 
               path={'/lists/:listId'}
               component={IdeasPage}
               />
            <PrivateRoute
                path={'/newidea'}
                component={NewIdeaPage}
                />
            <PrivateRoute
                path={'/newlist'}
                component={NewListPage}
                />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
      </ErrorComponent>
    )
  }
}

export default App