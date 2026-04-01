const { Router } = require('express');
const path = require("path");
const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    const newObject = { "author_id": authorId }

    res.send(`Author id: ${JSON.stringify(newObject)}`);

    console.log(res.statusCode)

})

module.exports = authorRouter;