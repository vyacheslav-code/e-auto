import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

export default () => (
    <div>
        <Link to="/"> <Icon type="home"/> </Link>
        <Link to="/services"> <Icon type="thunderbolt"/> </Link>
    </div>
)