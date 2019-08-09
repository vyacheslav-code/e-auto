import React from 'react'
import {Icon, Avatar} from 'antd'
import {Link} from 'react-router-dom'

export default class extends React.Component {
    state = {
        collapsed: true
    };

    toggleCollapsed = () => this.setState({collapsed: !this.state.collapsed});

    render() {
        return (
            <div>
                <div onClick={this.toggleCollapsed}>
                    <Icon type="star"/> Сучасний киянин <Icon type="down"/>
                </div>
                <div
                    style={
                        {display: this.state.collapsed ? 'none' : ''}
                    }
                >
                    <Link to="/report">
                        <Avatar size={64} icon={'camera'} />
                    </Link>
                </div>
            </div>
        )
    }
}