var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let store = req.query.store

    res.send({store: req.app.locals.vacuumStatus[store]})

});

module.exports = router;