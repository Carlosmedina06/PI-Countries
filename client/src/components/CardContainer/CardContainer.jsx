import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'

import { getCountries } from '../../redux/actions'
import { StyleCardContainer } from './CardContainerStyle'
import Card from '../Card/Card'
import Search from '../Search/Search'

const CardContainer = () => {
  const countries = useSelector((state) => state.countries)
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  useEffect(() => {
    setCountry(countries)
  }, [countries])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const result = !search
    ? country
    : country.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      )

  return (
    <StyleCardContainer>
      <Search handleSearch={handleSearch} result={result} search={search} />
      {!result.length && !search ? (
        <p>LOADING...</p>
      ) : (
        result.map((country) => {
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
      )}
    </StyleCardContainer>
  )
}

export default CardContainer
