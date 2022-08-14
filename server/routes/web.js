const routes = require('express').Router();
const { Player } = require("../models");

routes.get('/dashboard', async (req, res) => {
    const players = await Player.findAll()
    res.render('dashboard', {players})
})

routes.get('/dashboard/create', (req, res) => {
    res.render('create')
})

routes.get('/dashboard/delete/:id', async (req, res) => {
    const {id} = req.params

    const destroy = await Player.destroy({
        where: {id: id}
    })

    if (destroy)
        res.redirect('/dashboard')
})

routes.get('/dashboard/detail/:id', async (req, res) => {
    const { id } = req.params

    const playerData = await Player.findByPk(id)
    res.render('player', {playerData})
})

module.exports = routes;