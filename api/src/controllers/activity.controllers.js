const { Activity, Country } = require('../db')
const { getAllActivities } = require('../utils')

const createActivities = async (req, res) => {
  try {
    const { name, difficult, duration, season, countryId } = req.body
    const valdidateact = await Activity.findOne({
      where: {
        name: name,
      },
    })
    if (!valdidateact) {
      const addAct = await Activity.create({
        name: name,
        difficult: difficult,
        duration: duration,
        season: season,
      })
      const countrymatch = await Country.findAll({
        where: {
          id: countryId,
        },
      })
      const resact = await addAct.addCountries(countrymatch)
      return res.status(200).send(resact)
    }
    const countrymatch = await Country.findAll({
      where: {
        id: countryId,
      },
    })
    const resact = await valdidateact.addCountries(countrymatch)
    res.status(200).send(resact)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

const getActivities = async (req, res) => {
  try {
    let results = await getAllActivities()
    res.status(200).json(results)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = { createActivities, getActivities }
