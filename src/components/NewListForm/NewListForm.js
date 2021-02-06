import React, { Component } from 'react'
import ListContext from '../../contexts/ListContext'
import IdeasApiService from '../../services/ideas-api-service'
import { Input, Button, Required } from '../Utils/Utils'
import './NewListForm.css'

export default class NewListForm extends Component {
  static defaultProps = {
    onPostListSuccess: () => {}
}
  static contextType = ListContext 
  
  handleSubmitList = ev => {
    ev.preventDefault()
    const { name } = ev.target

    IdeasApiService.postList(name.value)
      .then(this.context.addList)
      .then(() => {
        name.value = ''
        this.props.onPostListSuccess()
      })
      .catch(this.context.setError)
  }

  render() {
    return (
    <div className='insertList'>
    <h3>You're entering a new list for your ideas</h3>
      <form
        className='listForm'
        onSubmit={this.handleSubmitList}
      >
        <div className='listName'>
            <label htmlFor='name'>New list's name:</label>
            <Required />
            <Input
                required
                type='text'
                maxLength='30'
                name='name'
                id='name'
                />
        </div>
        <Button type='submit'>
          Add List
        </Button>
      </form>
    </div>
    )
  }
}
