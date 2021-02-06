import React, { Component } from 'react'
import ListContext from '../../contexts/ListContext'
import IdeasApiService from '../../services/ideas-api-service'
import { Section } from '../../components/Utils/Utils'
import IdeaListItem from '../../components/IdeaListItem/IdeaListItem'
import { Link } from 'react-router-dom'
import './ListsPage.css'

export default class ListsPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  static contextType = ListContext

  componentDidMount() {
    IdeasApiService.getLists()
      .then(this.context.setLists)
      .then(this.context.clearError)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearLists()
  }

  handleDeleteSuccess = list => {
    const { history } = this.props
    history.push(`/`)
    this.context.deleteList(list)
  }

  renderLists() {
    const { lists = [] } = this.context
    return lists.map(list =>
      <IdeaListItem 
        id={list.id}
        key={list.id}
        list={list}
        onDeleteSuccess={()=>this.handleDeleteSuccess(list.id)}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='ListsPage'>
        <div className='newlist_idea'>
         <Link to="/newidea">
            <div className="newidea">
                New Idea
            </div>
        </Link>          
         <Link to="/newlist">
            <div className="newList">
                New List
            </div>
        </Link>
        </div>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderLists()}
      </Section>
    )
  }
}