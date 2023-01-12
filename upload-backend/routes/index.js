const api = require('./api');
const routes = require('express').Router();
const db = require('./DB');

routes.use('/api', api);
routes.use('/db', db);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});


module.exports = routes;