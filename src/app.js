const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Rota Padrão')
});

app.get('/produtos', (req, res) => {
    res.send('Rota Produtos')
});

app.get('/users', (req, res) => {
    res.send('Rota Usuários')
});

const server = app.listen(3001);

module.exports = server