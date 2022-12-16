import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'

import { getDetail } from '../../redux/actions'
import CoutryDetail from '../CountryDetail/CountryDetail'
import Layout from '../Layout/Layout'
import { StyleCountryDetailContainer } from './CountryDetailContainerStyle'

const CountryDetailContainer = () => {
  const countryDetail = useSelector((state) => state.countryDetail)
  const dispatch = useDispatch()

  let { id } = useParams()
  useEffect(() => {
    dispatch(getDetail(id))
  }, [id, dispatch])
  return (
    <Layout>
      <StyleCountryDetailContainer>
        <CoutryDetail
          key={countryDetail.id}
          name={countryDetail.name}
          flags={countryDetail.flags}
          continents={countryDetail.continents}
          capital={countryDetail.capital}
          subregion={countryDetail.subregion}
          area={countryDetail.area}
          population={countryDetail.population}
          activities={countryDetail.activities}
        />
      </StyleCountryDetailContainer>
    </Layout>
  )
}

export default CountryDetailContainer
