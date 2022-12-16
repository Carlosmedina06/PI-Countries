import React from 'react'

const Form = ({
  handleSubmit,
  handleChange,
  handleBlur,
  form,
  errors,
  countries,
  season,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        ></input>
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="difficult">difficult</label>
        <input
          id="difficult"
          type="number"
          value={form.difficult}
          name="difficult"
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.difficult && <p>{errors.difficult}</p>}
        <label htmlFor="duration">Duration</label>
        <input
          id="duration"
          type="number"
          value={form.duration}
          name="duration"
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.duration && <p>{errors.duration}</p>}
        <label htmlFor="season">Choice Season</label>
        <select
          id="season"
          value={form.season}
          name="season"
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {season.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.season && <p>{errors.season}</p>}
        <label htmlFor="country">Choice country</label>
        <select
          id="country"
          value={form.countryId}
          name="countryId"
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {countries.map((c) => (
            <option key={c.id} defaultValue={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.countryId && <p>{errors.countryId}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form
