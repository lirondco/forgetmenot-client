import React, { Component } from 'react'

const ListContext = React.createContext({
  lists: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLists: () => {},
  addList: () => {},
  deleteList: () => {},
  clearLists: () => {}
})
export default ListContext

export class ListProvider extends Component {
  state = {
    lists: [],
    error: null,
  };

  deleteList = listId => {
    this.setState({ lists: this.state.lists.filter(list=>{
        return list.id !== listId
    })
  })
}

  setLists = lists => {
    this.setState({ lists })
  }

  clearLists = () => {
    this.setLists([ ])
  }
 
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  addList = list => {
      this.setState({ list })
  }

  render() {
    const value = {
      lists: this.state.lists,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLists: this.setLists,
      addList: this.addList,
      deleteList: this.deleteList,
      clearLists: this.clearLists
    }
    return (
      <ListContext.Provider value={value}>
        {this.props.children}
      </ListContext.Provider>
    )
  }
}