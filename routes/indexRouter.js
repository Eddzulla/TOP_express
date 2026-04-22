const { Router } = require('express');

const path = require('path');
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

indexRouter.post("/messages/{message}/", (req, res) => {
    const fieldValue = req.body.prompt;
    console.log(req.body);
    res.send(`This is where you can see any messages: ${fieldValue}`);
})
module.exports = indexRouter;