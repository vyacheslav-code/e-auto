import React from 'react';
import { Icon } from 'antd';

export default class extends React.Component {

    state = {
        collapsed: true
    };

    toggleCollapsed = () => this.setState({ collapsed: !this.state.collapsed });

    render() {
        return (
            <div>
                <div onClick={this.toggleCollapsed}>
                    {this.props.name} <Icon type="down" />
                </div>
                <div style={
                    {
                        display: this.state.collapsed ? 'none' : ''
                    }
                }>
                    {this.props.content}
                </div>
            </div>
        )
    }
}
