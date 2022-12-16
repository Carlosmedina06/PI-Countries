import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'

import { getCountries } from '../../redux/actions'
import { StyleCardContainer } from './CardContainerStyle'
import Card from '../Card/Card'

const CardContainer = () => {
  const countries = useSelector((state) => state.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <StyleCardContainer>
      {countries.length
        ? countries.map((country) => {
            return (
              <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flags={country.flags}
                continents={country.continents}
              />
            )
          })
        : 'Loading...'}
    </StyleCardContainer>
  )
}

export default CardContainer
