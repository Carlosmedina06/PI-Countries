import React from 'react'
import { Link } from 'react-router-dom'

import { StyleCard } from './CardStyle'

const Card = ({ name, flags, continents, capital, id }) => {
  return (
    <StyleCard>
      <Link to={`/countries/${id}`}>
        <h2>{name}</h2>
        <p>{continents}</p>
        <p>{capital}</p>
        <img src={flags} alt={name} />
      </Link>
    </StyleCard>
  )
}

export default Card
