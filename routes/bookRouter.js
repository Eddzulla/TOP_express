const { Router } = require('express');

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books will be shown here"));

bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`book id: ${bookId}`);

})

module.exports = bookRouter;