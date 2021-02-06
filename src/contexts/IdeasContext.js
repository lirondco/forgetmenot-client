import React, { Component } from 'react'

export const nullList = {
    user: {}
}

const IdeasContext = React.createContext({
  list: nullList,
  loggedIn: false,
  ideas: [],
  lists: [],
  error: null,
  setError: () => {},
  toggleLoggedIn: () => {},
  clearError: () => {},
  setList: () => {},
  clearList: () => {},
  setIdeas: () => {},
  addIdea: () => {},
  deleteIdea: () => {},
  clearLists: ()  => {},
  setLists: () => {}
})

export default IdeasContext

export class IdeaProvider extends Component {
  state = {
    list: nullList,
    lists: [],
    ideas: [],
    error: null,
    loggedIn: false
  };

  deleteIdea = ideaId => {
      this.setState({ ideas: this.state.ideas.filter(idea=>{
          return idea.id !== ideaId
      })
    })
  }

  toggleLoggedIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setList = list => {
    this.setState({ list })
  }

  setLists = lists => {
    this.setState({ lists })
  }

  setIdeas = ideas => {
    this.setState({ ideas })
  }

  clearList = () => {
    this.setList(nullList)
    this.setIdeas([])
  }

  clearLists = () => {
      this.setLists([])
  }

  addIdea = idea => {
    this.setIdeas([
      ...this.state.ideas,
      idea
    ])
  }

  render() {
    const value = {
      list: this.state.list,
      ideas: this.state.ideas,
      lists: this.state.lists,
      error: this.state.error,
      loggedIn: this.state.loggedIn,
      toggleLoggedIn: this.toggleLoggedIn,
      setError: this.setError,
      clearError: this.clearError,
      setLists: this.setLists,
      setList: this.setList,
      setIdeas: this.setIdeas,
      clearList: this.clearList,
      addIdea: this.addIdea,
      deleteIdea: this.deleteIdea,
    }
    return (
      <IdeasContext.Provider value={value}>
        {this.props.children}
      </IdeasContext.Provider>
    )
  }
}
