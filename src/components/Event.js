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
                    {this.props.event.nember + ' - ' + this.props.event.message} <Icon type="down" />
                </div>
                <div style={
                    {
                        display: this.state.collapsed ? 'none' : ''
                    }
                }>
                    {this.props.event.sender}
                    {this.props.event.files.map(file => (
                        <img src={"data:image/jpg;base64," + file.data} alt={file.id} key={file.id} className = "img-autor" />
                    ))}
                </div>
            </div>
        )
    }
}
