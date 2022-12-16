import React from 'react'

import {
  StyleCountryDetail,
  StyleDetailTextContainer,
  NotFound,
  ImgContainer,
  Found,
} from './CountryDetailStyle'
import { RiUser6Fill, RiLandscapeLine, RiMapPinLine } from 'react-icons/ri'
import { TfiMapAlt } from 'react-icons/tfi'

const CountryDetail = ({
  name,
  flags,
  continents,
  capital,
  subregion,
  area,
  population,
  activities,
}) => {
  return (
    <StyleCountryDetail>
      <ImgContainer>
        <img src={flags} alt={name} />
      </ImgContainer>
      <StyleDetailTextContainer>
        <h2>{name}</h2>
        <p>{continents}</p>
        <p>
          <RiMapPinLine /> {capital}
        </p>
        <p>
          <TfiMapAlt /> {subregion}
        </p>
        <p>
          <RiLandscapeLine /> {area} km2
        </p>
        <p>
          <RiUser6Fill /> {population}
        </p>
        <div>
          <p>Activities:</p>
          {activities === undefined ||
          activities.length <= 0 ||
          activities === null ? (
            <NotFound>No Activities Found</NotFound>
          ) : (
            activities.map((e) => (
              <Found key={e.id}>
                <p>Name: {e.name}</p>
                <p>Difficult: {e.difficult}</p>
                <p>Duration: {e.duration}h</p>
                <p>Season: {e.season}</p>
              </Found>
            ))
          )}
        </div>
      </StyleDetailTextContainer>
    </StyleCountryDetail>
  )
}

export default CountryDetail
