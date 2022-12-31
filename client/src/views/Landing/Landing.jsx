import React from 'react'
import { Link } from 'react-router-dom'
import {
	BtnLanding,
	LandingContainer,
	LandingHeader,
	LandingStyle,
} from './LandingStyle'

const Landing = () => {
	return (
		<LandingStyle>
			<LandingContainer>
				<LandingHeader>
					<h1>PI - Countries 🏳️</h1>
				</LandingHeader>
				<Link to='/countries'>
					<BtnLanding>Home →</BtnLanding>
				</Link>
			</LandingContainer>
		</LandingStyle>
	)
}

export default Landing
