import React, { Component } from 'react'

const rawJournalData = [
    {title: 'Post One', content: 'Post content', status: 'draft'},
    {title: 'Post Two', content: 'Post content', status: 'Published'},
    {title: 'Post Three', content: 'Post content', status: 'Published'},
    {title: 'Post Four', content: 'Post content', status: 'Published'}
]

export default class JournalList extends Component {
    constructor(props) {
        super()

        this.state = {
            rawJournalData: rawJournalData,
            greeting: "Hi there",
            isOpen: true
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.heading}</h2>
            </div>
        )
    }
}