import React from 'react'
import { Link } from 'react-router-dom'
import { BtnLanding, LandingContainer, LandingHeader, LandingStyle } from './LandingStyle'

const Landing = () => {
  return (
    <LandingStyle>
      <Link to="/countries">
        <LandingContainer>
          <LandingHeader>
            <h1>PI - Countries 🏳️</h1>
          </LandingHeader>
          <BtnLanding>Home →</BtnLanding>
        </LandingContainer>
      </Link>
    </LandingStyle>
  )
}

export default Landing
