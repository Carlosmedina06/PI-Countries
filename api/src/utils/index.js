const axios = require('axios')

const { Country, Activity } = require('../db')

const header = {
  headers: { 'Accept-Encoding': '*' },
}

// Cargar Base de datos desde la api
const loadDB = async () => {
  const apiCountries = await axios.get(
    'https://restcountries.com/v3/all',
    header
  )
  const apiCountriesClean = await apiCountries.data.map((c) => {
    return {
      id: c.cca3,
      name: c.name.common,
      flags: c.flags.shift(),
      continents: c.continents.join(','),
      capital: c.capital + '',
      subregion: c.region,
      area: c.area,
      population: c.population,
    }
  })
  return apiCountriesClean.forEach(async (c) => {
    await Country.findOrCreate({
      where: {
        id: c.id,
        name: c.name,
        flags: c.flags,
        continents: c.continents,
        capital: c.capital,
        subregion: c.subregion,
        area: c.area,
        population: c.population,
      },
    })
  })
}
// Mostrar paises desde la base de datos
const getAllCountries = async () => {
  const results = await Country.findAll({ include: Activity })
  return results
}
// Mostrar actividades desde la base de datos
const getAllActivities = async () => {
  const results = await Activity.findAll()
  return results
}

module.exports = { loadDB, getAllCountries, getAllActivities }
