import { Link } from 'react-router-dom'
import { FcGlobe } from 'react-icons/fc'
import React from 'react'

import { StyleNavbar } from './NavbarStyle'

const Navbar = () => {
  return (
    <StyleNavbar>
      <nav>
        <div>
          <Link to="/countries">
            <FcGlobe />
            Carlos Medina
          </Link>
        </div>
        <div>
          <Link to="/countries">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/create">Add Activity</Link>
        </div>
      </nav>
    </StyleNavbar>
  )
}

export default Navbar
