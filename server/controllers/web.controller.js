const { Player } = require("../models");

class WebController {
    static async index(req, res) {
        const players = await Player.findAll()
        res.render('dashboard', {players})
    }

    static async create(req, res) {
        res.render('create')
    }

    static async delete(req, res) {
        const {id} = req.params
        const destroy = await Player.destroy({
            where: {id: id}
        })

        if (destroy)
            res.redirect('/dashboard')
    }

    static async show(req, res) {
        const { id } = req.params

        const playerData = await Player.findByPk(id)
        res.render('player', {playerData})
    }
}

module.exports = WebController;