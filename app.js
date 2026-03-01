const express = require('express');
const path = require('path');
// This is our server
const app = express();

// This is our route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})




app.post("/", (req, res) => {
    res.send("POST request to homepage", "/");
})

const PORT = 8000;
// We tell the server which port to listen for GET-requests
app.listen(PORT, (ERROR) => {
    if (ERROR) {
        throw ERROR;
    }
    console.log(`This is my app, listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});



