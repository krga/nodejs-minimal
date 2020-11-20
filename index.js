// index.js

const express = require("express");
const app = express();

// get the PORT environment variable or user port 3000 as default
const PORT = process.env.PORT || 3000;

// register GET route at /
app.get("/", (req, res) => {
    res.send("Hello from docker!");
});

// start HTTP server at the port defined in cont PORT
app.listen(PORT, () => {
    console.log(`minimal node.js boilerplate app listening on port ${PORT}, open http://localhost:${PORT}`);
});