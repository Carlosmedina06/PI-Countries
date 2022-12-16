const { Router } = require('express')

const {
  createActivities,
  getActivities,
} = require('../controllers/activity.controllers')
const { validateActivities } = require('../middlewares')

const router = Router()

router.get('/', getActivities)
router.post('/', validateActivities, createActivities)

module.exports = router
