import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

export default () => (
    <div className = "bottom-navbar">
        <Link to="/" className = "icon-navbar icon-active"> <Icon type="home"/> </Link>
        <Link to="/services" className = "icon-navbar"> <Icon type="thunderbolt"/> </Link>
        <Link to="/services"> <Icon type="user"/> </Link>
    </div>
)