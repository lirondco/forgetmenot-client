import React, { Component } from 'react'
import NewIdeaForm from '../../components/NewIdeaForm/NewIdeaForm'
import { Section } from '../../components/Utils/Utils'

export default class NewIdeaPage extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
    }

    handlePostIdeaSuccess = idea => {
        const { history } = this.props
        history.push('/')
    }

    render() {
        return (
            <Section className = 'NewIdeaPage'>
                <NewIdeaForm
                 onPostIdeaSuccess={this.handlePostIdeaSuccess}
                />
            </Section>
        )
    }
}