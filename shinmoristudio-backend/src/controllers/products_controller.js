const { getProducts } = require('../services/printify')

async function listProducts(req, res) {
    try {
        const products = await getProducts()
        res.json(products)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { listProducts }
