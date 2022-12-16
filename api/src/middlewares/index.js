const validateActivities = (req, res, next) => {
  const { name, difficult, season, duration, countryId } = req.body
  if (!name) return res.status(400).json({ error: 'missing name' })
  if (!difficult) return res.status(400).json({ error: 'missing difficult' })
  if (!duration) return res.status(400).json({ error: 'missing duration' })
  if (!season) return res.status(400).json({ error: 'missing season' })
  if (!countryId) return res.status(400).json({ error: 'missing countryId' })

  next()
}

module.exports = {
  validateActivities,
}
