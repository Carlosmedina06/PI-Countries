import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'

import {
  byOrder,
  byPopulation,
  getCountries,
  getActivities,
  byActivity,
  byContinent,
} from '../../redux/actions'
import { StyleCardContainer } from './CardContainerStyle'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import Sort from '../Sort/Sort'
import Pagination from '../Pagination/Pagination'



const CardContainer = () => {
  const countries = useSelector((state) => state.countries)
  const activities = useSelector((state) => state.activities)
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')
  const [,setOrder] = useState('')

  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, [dispatch])

  useEffect(() => {
    setCountry(countries)
  }, [countries])


  function reloadButton(e) {
    e.preventDefault()
    dispatch(getCountries())
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleOrder = (e) => {
    dispatch(byOrder(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(1);
  }
  const handleMax = (e) => {
    dispatch(byPopulation(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(1);
  }
  const handleActivity = (e) => {
    e.preventDefault()
    dispatch(byActivity(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(1);
  }

  const handleContinent = (e) => {
    e.preventDefault()
    dispatch(byContinent(e.target.value))
    setCurrentPage(1);
  }

  const result = !search
    ? countries
    : countries.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      )

      const currentCountry = result.slice(firstCountry, lastCountry);

    console.log(firstCountry, lastCountry) 
  return (
    <StyleCardContainer>




      <button onClick={reloadButton}>Recargar...</button>
      <Sort handleOrder={handleOrder} handleMax={handleMax} />
      <Filter handleActivity={handleActivity} handleContinent={handleContinent} activities={activities} result={result} />
      <Search handleSearch={handleSearch} result={result} search={search} />
      {!currentCountry.length && !search ? (
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
      <Pagination
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
      />

    </StyleCardContainer>
  )
}

export default CardContainer
