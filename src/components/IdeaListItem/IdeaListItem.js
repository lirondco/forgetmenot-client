import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IdeasApiService from '../../services/ideas-api-service'
import './IdeaListItem.css'

//this component renders each clickable list name

export default class IdeaListItem extends Component {
  static defaultProps = {
    onDeleteSuccess: () => {}
  }
  
  //function for deletion 
  handleClickDelete = e => {
    e.preventDefault()
    const listId = this.props.id
    if(window.confirm("WARNING: Deleting is irreversible and will delete all ideas in this list. Are you sure you want to delete?")) {
    IdeasApiService.deleteList(listId)
     .then(() => this.props.onDeleteSuccess())
     .catch(error=>console.error({error}))
  }}

  render() {
    const { list } = this.props
    return (
    <div className='IdeaListItem__main'>
      <Link to={`/lists/${list.id}`} className='IdeaListItem'>
        <header className='IdeaListItem__header'>
          <h2 className='IdeaListItem__heading'>
            {list.name}
          </h2>
        </header>
        <footer className='IdeaListItem__footer'>
          <ListIdeaCount list={list} />
        </footer>
      </Link>
      <button type='button' className='delete_list_button' onClick={this.handleClickDelete}>
          Delete
      </button>
    </div>
    )
  }
}

//function to display number of ideas in each list

function ListIdeaCount({ list }) {
  let text = "ideas";

  if(list.number_of_ideas < 2) {
    text = "idea"
  }
  return (
    <span
      className='IdeaListItem__idea-count'
    >
        {list.number_of_ideas} {text}
    </span>
  )
}