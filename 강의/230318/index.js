const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send(req.query.name);
});

app.listen(8000, ()=> {
    console.log("server is open, port: 8000");
})