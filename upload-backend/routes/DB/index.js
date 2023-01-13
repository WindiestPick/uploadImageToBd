const saveimg = require('./saveImg');
const importimg = require('./importimg');
const router = require('express').Router();

router.use('/saveimg', saveimg);
router.use('/importimg', importimg);

module.exports = router;