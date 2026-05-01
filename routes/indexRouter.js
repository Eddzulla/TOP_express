const { Router } = require('express');

const path = require('path');
const indexRouter = Router();

const links = [
    {href: "/", text: "Home"},
    {href: "about", text: "About"}
];

const users = [
    "Rose", "Cake", "Beef"
];

indexRouter.get("/", (req, res) => {
    res.locals.links = links;
    res.locals.users = users;
    res.render("index",{message: "EJS Rocks!"});
})

indexRouter.get("/about", (req, res) => {
    res.locals.links = links;
    res.render("about");
})

indexRouter.post("/messages/{message}/", (req, res) => {
    const fieldValue = req.body.prompt;
    console.log(req.body);
    res.send(`This is where you can see any messages: ${fieldValue}`);
})
module.exports = indexRouter;