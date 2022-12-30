import { Link } from 'react-router-dom'
import { FcGlobe } from 'react-icons/fc'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'
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
          <a
            href="https://www.linkedin.com/in/carlosmedina06/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill />
          </a>

          <a
            href="https://github.com/carlosmedina06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill />
          </a>
        </div>
        <div>
          <Link to="/countries">Home</Link>
          <Link to="/create">Add Activity</Link>
        </div>
      </nav>
    </StyleNavbar>
  )
}

export default Navbar
