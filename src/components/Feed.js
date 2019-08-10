import React from 'react'
import Event from './Event'
import {Icon} from 'antd'
import axios from 'axios'

export default class extends React.Component {
    state = {
        loading: false,
        events: []
    };

    async componentDidMount() {
        this.setState({ loading: true });
        try {
            const result = await axios.get(`/cars/${this.props.number}`);
            let events = [];
            for (let ev of result.data.cars) {
                    events.push(ev);
            }
            this.setState({
                events,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className = "main-list-styles">
                {this.state.loading ? <Icon type="loading" /> :
                    this.state.events.map((event) => (
                        <Event event={event} className = "main-list-item"/>
                    ))
                }
            </div>
        )
    }
}