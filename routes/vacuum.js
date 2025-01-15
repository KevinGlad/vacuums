var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let store = req.query.store
    let side = req.query.side
    let id = req.query.id

    res.send({store, side, id, status: req.app.locals.vacuumStatus[store][side][id]})

});

router.post('/',function(req, res, next){
    let {store,side,id} = req.body

    req.app.locals.vacuumStatus[store][side][id] = !req.app.locals.vacuumStatus[store][side][id]

    res.send({store, side, id, status: req.app.locals.vacuumStatus[store][side][id]})
})

module.exports = router;