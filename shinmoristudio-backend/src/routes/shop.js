const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config()

const TOKEN = process.env.PRINTIFY_TOKEN
const headers = { Authorization: `Bearer ${TOKEN}` }

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.printify.com/v1/shops.json', { headers })
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
