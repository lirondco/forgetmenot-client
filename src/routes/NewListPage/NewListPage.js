import React, { Component } from 'react'
import NewListForm from '../../components/NewListForm/NewListForm'
import { Section } from '../../components/Utils/Utils'

export default class NewListPage extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
    }

    handlePostListSuccess = list => {
        const { history } = this.props
        history.push('/')
    }

    render() {
        return (
            <Section className = 'newListPage'>
                <NewListForm
                 onPostListSuccess={this.handlePostListSuccess}
                />
            </Section>
        )
    }
}