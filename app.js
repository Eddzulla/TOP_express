const express = require('express');
const authorRouter = require('./routes/authorRouter.js');
const bookRouter = require('./routes/bookRouter.js')
const indexRouter = require('./routes/indexRouter.js');
const CustomNotFoundError = require('./errors/CustomNotFoundError.js');

const app = express(); // This is our server
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This is our routing
app.use("/authors/", authorRouter);
app.use("/books/", bookRouter);
app.use("/", indexRouter)

// We tell the server which port to listen for GET-requests
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`This is my app, listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err);
})




