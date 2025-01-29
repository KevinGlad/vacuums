var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let store = req.query.store
    //https://stackoverflow.com/questions/34657222/how-to-use-server-sent-events-in-express-js
    res.writeHead(200, {
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
        "Content-Type": "text/event-stream",
        });

        const interval = setInterval(() => {
            const chunk = JSON.stringify({store, vacuums:req.app.locals.vacuumStatus[store]})
            res.write(`data: ${chunk}\n\n`)
        }, 100);

        res.on("close", () => {
            clearInterval(interval);
            res.end();
        });
    //res.send({store, vacuums:req.app.locals.vacuumStatus[store]})

});

module.exports = router;