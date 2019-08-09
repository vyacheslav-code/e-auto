import React from 'react'
import {Icon} from 'antd';

export default class extends React.Component {
    state = {
        collapsed: true
    };

    toggleCollapsed = () => this.setState({collapsed: !this.state.collapsed});

    render() {
        return (
            <div className = "main-list-styles">
                <div onClick={this.toggleCollapsed}>
                    <Icon type="star"/> Сучасний киянин <Icon type="down"/>
                </div>
                <div className = "main-list-item"
                    style={
                        {display: this.state.collapsed ? 'none' : ''}
                    }
                >
                    123
                </div>
            </div>
        )
    }
}