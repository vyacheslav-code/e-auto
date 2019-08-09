import React from 'react'
import { Route, Switch, withRouter} from "react-router-dom";
import Feed from './components/Feed'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Topnavbar from './components/Topnavbar'
import Report from './components/Report'
import Login from './components/Login'

import './App.css';

class App extends React.Component {

    state = {
        loggedIn: false,
        id: undefined
    };

    users = [
        {
            login: '0635224205',
            password: '12345',
            id: '1'
        }
    ];

    handleLogin = (data) => {
        const {login, password} = data;
        this.users.forEach(user => {
            if (user.login === login && user.password === password) {
                this.setState({
                    loggedIn: true,
                    id: user.id
                });
                this.props.history.push('/');
            }
        })

    };

    render() {
        return (
            this.state.loggedIn ?
                <div>
                    <Topnavbar/>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact={true} component={Feed}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/report" component={Report}/>
                    </Switch>
                </div>
                :
                <Login handleLogin={this.handleLogin}/>
        );
    }

}

export default withRouter(props => <App {...props} />);
