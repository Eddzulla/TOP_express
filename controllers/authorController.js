const db = require("../db.js");
const CustomNotFoundError = require("../errors/CustomNotFoundError.js");

async function getAuthorById(req, res){
    const { authorId } = req.params;
    console.log(req.params.authorId);
    
    const author = await db.getAuthorById(Number(authorId));

    if(!author){
        throw new CustomNotFoundError("Author not found");
    }
    res.send(`Author object: {id: ${author.id}, name: ${author.name}}`);
};

module.exports = {getAuthorById};