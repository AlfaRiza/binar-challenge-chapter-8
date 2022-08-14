const routes = require('express').Router();
const { Player } = require("../models");

const WebController = require("../controllers/web.controller");

routes.get('/dashboard', WebController.index)

routes.get('/dashboard/create', WebController.create)

routes.get('/dashboard/delete/:id', WebController.delete)

routes.get('/dashboard/detail/:id', WebController.show)

module.exports = routes;