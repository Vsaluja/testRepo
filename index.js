const express = require('express');
const PORT = 8080;
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    res.send("Hello from express");
})

app.listen(PORT, () => {
    console.log("Connected");
})