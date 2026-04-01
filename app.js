const express = require('express');

const app = express(); // This is our server
const authorRouter = require('./routes/authorRouter.js');
const bookRouter = require('./routes/bookRouter.js')
const indexRouter = require('./routes/indexRouter.js')

app.use(express.urlencoded({ extended: true }));

// This is our routing
app.use("/", indexRouter)
app.use("/authors/", authorRouter);
app.use("/books/", bookRouter);

const PORT = 8000;
// We tell the server which port to listen for GET-requests
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`This is my app, listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});





