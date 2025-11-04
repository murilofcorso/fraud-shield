const express = require('express')
const app = express()
app.use(express.json()) 

const baseEstatisticas = {}

app.get('/estatisticas', (req, res) => {
    res.json(baseEstatisticas)
})
