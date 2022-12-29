import React from 'react'
import { SearchStyle} from './SearchStyle.js'

const Search = ({search, handleSearch}) => {
  return (
    <SearchStyle>
            <input
          type="text"
          placeholder="Find your country 🔍"
          value={search}
          onChange={handleSearch}
        />
    </SearchStyle>
  )
}

export default Search