import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/NavBar.css'
function NavBar() {
    return (
        <div>
            <nav className='Menu'>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/pqr'>PQR</Link></li>
                    <li><Link to='/login'>LOGIN</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar