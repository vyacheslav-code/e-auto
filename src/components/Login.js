import React from 'react'
import {Input, Icon, Button} from 'antd'

export default class extends React.Component {
    state = {
      login: '',
      password: ''
    };

    onChangeLogin = e => this.setState({login: e.target.value});

    onChangePassword = e => this.setState({password: e.target.value});

    handleLogin = () => this.props.handleLogin(this.state);

    render() {
        return (
           <div className = "main-list-styles">
           <label for = "login">Логін   </label>
                <Input prefix={<Icon type={'user'} />} onChange={this.onChangeLogin}/>
                <label for = "password">Пароль   </label>
                <Input prefix={<Icon type={'lock'} />} type="password" onChange={this.onChangePassword}/>
                <Button onClick={this.handleLogin}> Увійти</Button>
            </div>
        )
    }
}