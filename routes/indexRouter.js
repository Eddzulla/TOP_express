const { Router } = require('express');

const path = require('path');
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));
indexRouter.get("/messages/:message/", (req, res) => {
    res.send(`This is where you can see any messages: ${req.params.message}`);
})

module.exports = indexRouter;