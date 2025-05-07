const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config()

const TOKEN = process.env.PRINTIFY_TOKEN
const SHOP_ID = process.env.SHOP_ID
const headers = { Authorization: `Bearer ${TOKEN}` }

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://api.printify.com/v1/shops/${SHOP_ID}/products.json`, { headers })
    console.log('Resposta da Printify:', response.data)  // Log da resposta
    res.json(response.data)
  } catch (err) {
    console.error('Erro ao buscar produtos:', err)  // Log do erro
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
