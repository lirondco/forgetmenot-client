import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { IdeaProvider } from './contexts/IdeasContext'
import { ListProvider } from './contexts/ListContext'
import * as serviceWorker from './serviceWorker'
import App from './components/App/App'
import './index.css'


ReactDOM.render(
  <BrowserRouter>
    <ListProvider>
      <IdeaProvider>
        <App />
      </IdeaProvider>
    </ListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()