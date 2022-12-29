import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'

import {
  byActivity,
  byContinent,
  byOrder,
  byPopulation,
  getActivities,
  getCountries,
} from '../../redux/actions'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'
import Search from '../Search/Search'
import Sort from '../Sort/Sort'
import {
  Container,
  CartaContainer,
  Filtros,
  BtnReset,
} from './CardContainerStyle'
import Loading from '../Loading/Loading'

const CardContainer = () => {
  const countries = useSelector((state) => state.countries)
  const activities = useSelector((state) => state.activities)
  const dispatch = useDispatch()

  //Estados
  const [country, setCountry] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')
  const [, setOrder] = useState('')

  //useEffect dispatch funciones
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, [dispatch])
  //useEffect setear Country
  useEffect(() => {
    setCountry(countries)
  }, [countries])

  //data pagination
  const totalPages = Math.ceil(currentPage / 9 + 1)
  const filterCountries = () => {
    if (!search) {
      return country.slice(currentPage, currentPage + 9)
    }
    const filtered = country.filter((c) =>
      c.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    return filtered.slice(currentPage, currentPage + 9)
  }
  //Pagina Anterior
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 9)
  }
  //Pagina siguiente
  const nextPage = () => {
    if (country.filter((c) => c.name.includes(search)).length > currentPage + 9)
      setCurrentPage(currentPage + 9)
  }

  //handlers
  const reloadButton = (e) => {
    e.preventDefault()
    dispatch(getCountries())
  }
  const handleSearch = (e) => {
    setCurrentPage(0)
    setSearch(e.target.value)
  }
  const handleOrder = (e) => {
    dispatch(byOrder(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(0)
  }
  const handleMax = (e) => {
    dispatch(byPopulation(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(0)
  }
  const handleActivity = (e) => {
    e.preventDefault()
    dispatch(byActivity(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(0)
  }
  const handleContinent = (e) => {
    e.preventDefault()
    dispatch(byContinent(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(0)
  }

  return (
    <Container>
      <Search search={search} handleSearch={handleSearch} />
      <Filtros>
        <Sort handleOrder={handleOrder} handleMax={handleMax} />
        <Filter
          handleActivity={handleActivity}
          handleContinent={handleContinent}
          activities={activities}
          filterCountries={filterCountries}
        />
      </Filtros>
      <BtnReset onClick={reloadButton}>Recargar Countries...</BtnReset>
      <CartaContainer>
        {!filterCountries().length & !search ? (
          <Loading/>
        ) : (
          filterCountries().map((country) => {
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
      </CartaContainer>
      <Pagination
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </Container>
  )
}

export default CardContainer
