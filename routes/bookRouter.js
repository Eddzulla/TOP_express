const { Router } = require('express');

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books will be shown here"));

bookRouter.get("/:bookId", (req, res, next) => {
    const { bookId } = req.params;
    res.json(`book id: ${bookId}`);

    next();

})

module.exports = bookRouter;