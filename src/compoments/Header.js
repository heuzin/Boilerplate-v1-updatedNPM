import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/help'>Help</Link>
    </div>
)

export default Header