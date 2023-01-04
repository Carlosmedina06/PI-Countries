import React from 'react'
import { StyledFiltro } from './FilterStyle'


const Filter = ({ activities, handleActivity, handleContinent, filterCountries }) => {


  return (
    <StyledFiltro>
      <h4>Filter</h4>
      <label htmlFor="act">Activities</label>
      <select id="act" onChange={handleActivity}>
        <option value="All">Choose an option</option>
        {activities.length ? (
          activities.map((e) => (
            <option value={e.name} name="act" key={e.id}>
              {e.name}
            </option>
          ))
        ) : (
          <option>Activity not found</option>
        )}
      </select>
      <label htmlFor="cont"> Continents</label>
      <select id="cont" onChange={handleContinent}>
        <option value="All">All Continents</option>
        {filterCountries().length ? (
          <>
            <option value='Africa' key='Africa'>Africa</option>
            <option value='Antarctica' key='Antarctica'>Antarctica</option>
            <option value='Asia' key='Asia'>Asia</option>
            <option value='Europe' key='Europe'>Europe</option>
            <option value='North America' key='NorthAmerica'>North America</option>
            <option value='Oceania' key='Oceania'>Oceania</option>
            <option value='South America' key='SouthAmerica'>South America</option>
          </>
        ) : (
          <option>Continent not found</option>
        )}
      </select>

    </StyledFiltro>
  )
}


export default Filter
