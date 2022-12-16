import { Link } from 'react-router-dom'
import { FcGlobe } from 'react-icons/fc'
import { RiSunLine } from 'react-icons/ri'
import React from 'react'

import { StyleNavbar } from './NavbarStyle'

const Navbar = () => {
  return (
    <StyleNavbar>
      <nav>
        <div>
          <Link to="/home">
            <FcGlobe />
            Carlos Medina
          </Link>
        </div>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/create">Add Activity</Link>
          <button>
            <RiSunLine />
          </button>
        </div>
      </nav>
    </StyleNavbar>
  )
}

export default Navbar
