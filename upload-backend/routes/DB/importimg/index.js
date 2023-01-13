const routes = require('express').Router({ mergeParams: true });
const importa = require('../../../controllers/DataBase/images');

routes.post('/', importa);

module.exports = routes;