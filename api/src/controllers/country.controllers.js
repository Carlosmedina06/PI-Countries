const { loadDB, getAllCountries } = require('../utils')
const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const getCountries = async (req, res) => {
  try {
    let { name } = req.query
    const findCountriesByName = async () => {
      name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1)
      let results = await Country.findAll({
        include: Activity,
        where: {
          name: {
            [Op.iLike]: '%' + name + '%',
          },
        },
      })
      results = results.length
        ? res.status(200).json(results)
        : res.status(404).send({ message: 'Country not found' })
    }
    let results = name ? await findCountriesByName() : await getAllCountries() //loadDB()
    return res.status(200).json(results)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

const getCountrisById = async (req, res) => {
  try {
    const id = req.params.id.toUpperCase()
    let country = await Country.findOne({
      where: {
        id: id,
      },
      include: Activity,
    })
    country = country
      ? res.status(200).json(country)
      : res.status(404).send({ message: 'Country not found' })
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = { getCountries, getCountrisById }
