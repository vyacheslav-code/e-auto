import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Icon} from 'antd'

export default withRouter((props) => (
    <div className = "bottom-navbar">
        <Link to="/" className = {`icon-navbar ${props.location.pathname === '/' && 'icon-active'}`}> <Icon type="home"/> </Link>
        <Link to="/services" className = {`icon-navbar ${props.location.pathname === '/services' && 'icon-active'}`}> <Icon type="thunderbolt"/> </Link>
        <Link to="/services" className="icon-navbar"> <Icon type="user"/> </Link>
    </div>
));