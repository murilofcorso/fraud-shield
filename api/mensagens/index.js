const express = require('express')
const app = express()
app.use(express.json()) 

const baseMensagens = {}

app.get('/mensagens', (req, res) => {
    res.json(baseMensagens)
})
