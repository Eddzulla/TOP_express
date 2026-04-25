const db = require("../db.js");

async function getAuthorById(req, res){
    const { authorId } = req.params;
    console.log(req.params.authorId);

    const author = await db.getAuthorById(Number(authorId));

    if(!author){
        res.status(404).send("Author not found");
        return;
    }

    res.send(`Author name: ${author.name}`);
};

module.exports = {getAuthorById};