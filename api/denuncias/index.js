const express = require('express')
const app = express()
app.use(express.json()) 

app.post('/denuncias', (req, res) => {
    const denuncia = req.body
})
