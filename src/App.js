import React from 'react'
import {Route, Switch, withRouter} from "react-router-dom";
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
        user: undefined
    };

    users = [
        {
            login: '',
            password: '',
            id: '1'
        }
    ];

    handleLogin = (data) => {
        const {login} = data;
        this.setState({
            loggedIn: true,
            user: {
                login
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
                        <Route path="/" exact={true}
                               component={props => <Feed {...props} number={this.state.user.login}/>}/>
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
