import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <nav>
            <ul className='header'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Header
