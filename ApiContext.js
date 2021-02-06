import React from 'react'

export default React.createContext({
  ideas: [],
  lists: [],
  addList: () => {},
  addIdea: () => {},
  deleteIdea: () => {},
  deleteList: () => {},
  editIdea: () => {},
  editList: () => {}
})