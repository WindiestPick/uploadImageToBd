const routes = require('express').Router({ mergeParams: true });
const save = require('../../../controllers/DataBase/saveimg');

routes.post('/', save);

module.exports = routes;