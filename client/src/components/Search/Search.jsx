import React from 'react'

const Search = ({ handleSearch, result, search }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="find your country"
        onChange={handleSearch}
      />
      {result.length && search ? <p>countries: {result.length}</p> : <></>}
      {!result.length && search ? <p>Country not Found</p> : <></>}
    </div>
  )
}

export default Search
