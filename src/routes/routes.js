const express = require('express')
const { logarUsuario, cadastrarNovoUsuario } = require('../controllers/usuarios')
const { validarLoginUsuario, validarCadastro } = require('../middlewares/usuarios')
const routes = express()


routes.get('/', (req, res) => {
    return res.json(`Olá Mundo!`)
})
routes.post('/sign', validarCadastro, cadastrarNovoUsuario)
routes.post('/login', validarLoginUsuario, logarUsuario)

module.exports = { routes }
