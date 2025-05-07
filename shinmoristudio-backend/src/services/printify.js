const axios = require('axios')
require('dotenv').config()

const API = 'https://api.printify.com/v1'
const TOKEN = process.env.PRINTIFY_TOKEN
const SHOP_ID = process.env.SHOP_ID

const headers = {
    Authorization: `Bearer ${TOKEN}`
}

async function getProducts() {
    const res = await axios.get(`${API}/shops/${SHOP_ID}/products.json`, { headers })
    return res.data
}

module.exports = { getProducts }
