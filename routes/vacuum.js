var express = require('express');
var router = express.Router();

router.get('/vacuum', function(req, res, next) {
  let {side,vacuum} = req.body

  res.send({side, vacuum, status: req.app.locals.vacuumStatus[side][vacuum]})

});

router.post('/vacuum',function(req, res, next){
  let {side,vacuum} = req.body

  req.app.locals.vacuumStatus[side][vacuum] = !req.app.locals.vacuumStatus[side][vacuum]

  res.send({side, vacuum, status: req.app.locals.vacuumStatus[side][vacuum]})
})

module.exports = router;