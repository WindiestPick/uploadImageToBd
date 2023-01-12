const saveimg = require('./saveImg');
const router = require('express').Router();

router.use('/saveimg', saveimg);

module.exports = router;