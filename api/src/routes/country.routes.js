const { Router } = require('express')

const {
  getCountries,
  getCountrisById,
} = require('../controllers/country.controllers')

const router = Router()

router.get('/', getCountries)
router.get('/:id', getCountrisById)

module.exports = router
