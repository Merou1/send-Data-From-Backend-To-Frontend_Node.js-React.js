const express = require('express');
const app = express();
const port = 5000;

app.get("/api",(req,res) => {
    res.json({"users" : ["UserOne","UserTwo","UserThree","UserFour"]})
})

app.listen(port,() => {
    console.log("Listening http://localhost:"+port+"/api");
})