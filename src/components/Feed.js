import React from 'react'
import Event from './Event'

export default class extends React.Component {
    state = {
        events: [
            {
                name: 'Event 1',
                content: 'Event 1 content',
                id: 1
            },
            {
                name: 'Event 2',
                content: 'Event 2 content',
                id: 2
            }
        ]
    };

    render() {
        return (
            <div>
                {this.state.events.map((event) => (
                    <Event name={event.name} key={event.id} content={event.content}/>
                ))}
            </div>
        )
    }
}