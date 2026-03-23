const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.post("/post", (req, res) => {
    console.log("POST request data:", req.body);
    res.send("POST request recived!!!");
});

app.listen(port, () => {
    console.log(`The server is running: http://localhost:${port}`);
});