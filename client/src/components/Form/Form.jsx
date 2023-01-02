import { RiCloseLine } from 'react-icons/ri'

import React from 'react'

import { BtnSubmit, CountryBadge, FormStyles } from './FormStyle'

const Form = ({
  handleSubmit,
  handleChange,
  handleBlur,
  handleSelect,
  handleDelete,
  form,
  errors,
  countries,
  season,
}) => {
  return (
    <FormStyles onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        placeholder="Name activity"
        required
      ></input>
      {errors.name && <p>{errors.name}</p>}
      <label htmlFor="difficult">Difficulty: </label>
      <input
        id="difficult"
        type="number"
        value={form.difficult}
        name="difficult"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      ></input>
      {errors.difficult && <p>{errors.difficult}</p>}
      <label htmlFor="duration">Duration (in hours): </label>
      <input
        id="duration"
        type="number"
        value={form.duration}
        name="duration"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      ></input>
      {errors.duration && <p>{errors.duration}</p>}
      <label htmlFor="season">Season: </label>
      <select
        id="season"
        value={form.season}
        name="season"
        onChange={handleChange}
        onBlur={handleBlur}
        required
      >
        <option value="" hidden>
          Select Season
        </option>
        {season.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      {errors.season && <p>{errors.season}</p>}
      <label htmlFor="countries">Country: </label>
      <select onChange={handleSelect} required>
        <option value="" hidden>
          Select country
        </option>
        {countries.map((e) => (
          <option value={e.id} name="countries" required key={e.id}>
            {e.name}
          </option>
        ))}
      </select>
      {errors.countryId && <p>{errors.countryId}</p>}
      {form.countryId.map((c) => (
        <CountryBadge>
          {c}
          <div onClick={() => handleDelete(c)}>
            <RiCloseLine />
          </div>
        </CountryBadge>
      ))}
      <BtnSubmit type="submit">Create activity</BtnSubmit>
    </FormStyles>
  )
}

export default Form
