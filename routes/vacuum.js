var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let side = req.query.side
    let id = req.query.id
    console.log({side, id})
    console.log(req.app.locals.vacuumStatus)
    res.send({side, id, status: req.app.locals.vacuumStatus[side][id]})

});

router.post('/',function(req, res, next){
    let {side,id} = req.body
    console.log({side, id})
    req.app.locals.vacuumStatus[side][id] = !req.app.locals.vacuumStatus[side][id]
    console.log(req.app.locals.vacuumStatus)
    res.send({side, id, status: req.app.locals.vacuumStatus[side][id]})
})

module.exports = router;