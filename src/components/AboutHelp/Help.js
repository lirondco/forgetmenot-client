import React from 'react'
import MyForm from './MyForm'
import './AboutHelp.css'

export default function Help() {
    return (
        <div className="help_page">
            <h1>Questions? Suggestions?</h1>
            <h3>Report a problem, ask a question, or suggest how we can improve</h3>
            <MyForm />
        </div>
    )
}