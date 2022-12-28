import React from 'react'

const Sort = ({ handleOrder, handleMax }) => {
  return (
    <div>
      <h4>SORT</h4>
      <label htmlFor="atoz">Alphabeticaly</label>
      <select id="atoz" onChange={handleOrder}>
        <option value="">Choose an option</option>
        <option value="Asc">A-Z</option>
        <option value="Desc">Z-A</option>
      </select>
      <label htmlFor="people">Population</label>
      <select id="people" onChange={handleMax}>
        <option value="">Choose an option</option>
        <option value="MAX">Max Population</option>
        <option value="MIN">Min Population</option>
      </select>
    </div>
  )
}

export default Sort
