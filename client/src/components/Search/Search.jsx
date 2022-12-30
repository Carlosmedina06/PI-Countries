import React from 'react'
import {SearchStyle} from './SearchStyle.js'

const Search = ({search, handleSearch, filterCountries}) => {
  return (
    <SearchStyle>
            <input
          type="text"
          placeholder="Find your country 🔍"
          value={search}
          onChange={handleSearch}
        />
        {!filterCountries().length ? <p>Country not found 😦</p> : null}
    </SearchStyle>
  )
}

export default Search