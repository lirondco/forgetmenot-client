import React, { Component } from 'react'
import IdeasContext from '../../contexts/IdeasContext'
import IdeasApiService from '../../services/ideas-api-service'
import { Input, Button, Textarea, Required } from '../Utils/Utils'
import { Link } from 'react-router-dom'
import './NewIdeaForm.css'

export default class NewIdeaForm extends Component {  
  static defaultProps = {
      onPostIdeaSuccess: () => {}
  }
  static contextType = IdeasContext
  listSelection = []
  missingList = false

  componentDidMount() {
    IdeasApiService.getLists()
      .then(this.context.setLists)
      .then(this.context.clearError)
      .catch(this.context.setError)
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { list } = ev.target
    const { name } = ev.target
    const { content } = ev.target

    IdeasApiService.postIdea(list.value, name.value, content.value)
      .then(() => {
        list.value = ''
        name.value = ''
        content.value = ''
        this.props.onPostIdeaSuccess()
      })
      .catch(this.context.setError)
      .catch(this.missingList = true)
  }

  renderListError() {
    console.log(this.missingList)
    if(this.missingList === true) {
      return (
        <p className="red">Please select a list! If you don't have a list, <Link to='/newlist'>click here</Link> to make one.</p>
      )
    }
  }

  render() {
    const { lists=[] } = this.context
    return (
    <div className='insertIdea'>
    <h3>You're entering a new idea</h3>
      <form
        className='ideaForm'
        onSubmit={this.handleSubmit}
      >
        <div className='ideaName'>
            <label htmlFor='name'>New idea's name:</label>
            <Required />
            <Input
                required
                type='text'
                maxLength='30'
                name='name'
                id='name'
                />
        </div>
        <div className='content'>
          <label htmlFor='content'>
            Description
          </label>
          <Required />
          <Textarea
            required
            name='content'
            id='content'
            cols='30'
            rows='3'
            maxLength='240'
            placeholder='Type a short description...'>
          </Textarea>
          <br />
          <label htmlFor='list'>Add to which list?</label>
        <Required />
        <select id='list' name='list' required>
            <option value={null}>...</option>
            {lists.map(list => {
                return (
                <option key={list.id} value={list.id}>
                    {list.name}
                </option>
                )
            })}
        </select>
        </div>
        <Button type='submit'>
          Add Idea
        </Button>
        {this.renderListError()}
      </form>
    </div>
    )
  }
}
