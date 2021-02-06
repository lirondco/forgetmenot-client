import React, { Component } from 'react'
import IdeasContext from '../../contexts/IdeasContext'
import IdeasApiService from '../../services/ideas-api-service'
import { Section } from '../../components/Utils/Utils'
import Accordion from '../../components/Accordion/Accordion'
import { Link } from 'react-router-dom'
import './IdeasPage.css'

export default class IdeasPage extends Component {
  static defaultProps = {
    match: { params: {} },
    history: {
        push: () => {},
      },
  }

  static contextType = IdeasContext

  componentDidMount() {
//retrieve data from the server upon the component's mounting
    const { listId } = this.props.match.params
    IdeasApiService.getList(listId)
      .then(this.context.setList)
      .then(this.context.clearError)
      .catch(this.context.setError)
    IdeasApiService.getListIdeas(listId)
      .then(this.context.setIdeas)
      .then(this.context.clearError)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
//clears the context out when done
    this.context.clearList()
  }

  handleDeleteSuccess = idea => {
    const { history } = this.props
    history.push(`/lists/${this.context.list.id}`)
    this.context.deleteIdea(idea)
  }

  renderList() {
    const { list, ideas } = this.context
    return <>
      <h2 className='list_name'>{list.name}</h2>
      <Ideas ideas={ideas} deleteFunction={this.handleDeleteSuccess} />
    </>
  }

  render() {
    const { error, list={} } = this.context
    let content
    if (error) {
//adds a layer for error handling
      content = (error.error === `List doesn't exist`)
        ? <p className='red'>List not found</p>
        : <p className='red'>There was an error</p>
    } else if (!list.id) {
      content = <div className='loading' />
    } else {
      content = this.renderList()
    }
    return (
      <Section className='IdeasPage'>
        {content}
      </Section>
    )
  }
}

function Ideas({ ideas = [], deleteFunction }) {
// adds a message with a link to the home page when a list is empty
    if (ideas.length === 0) {
        return (
            <div className='empty_list'>
            <p>This list is empty!</p>
            <Link to='/'>Go back to home page</Link>
            </div>
        )
    }
  return (
      ideas.map(idea =>
          <Accordion
           onDeleteSuccess={() => deleteFunction(idea.id)}
           key={idea.id}
           id={idea.id}
           title={idea.name}
           content={idea.content} />
      )
  )
}
