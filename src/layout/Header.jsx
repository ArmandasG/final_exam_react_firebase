import React from 'react'
import './header.scss'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className='container'>
            <Link to={'/'} className='logo'>
                Logo
            </Link>
            <nav>
                <NavLink className='navItem' to={'/'}>
                    Home
                </NavLink>
                <NavLink className='navItem' to={'/shops'}>
                    Shops
                </NavLink>
                <NavLink className='navItem' to={'/shops/new'}>
                    Add Shop
                </NavLink>
                <NavLink className='navItem' to={'/login'}>
                    Login
                </NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header