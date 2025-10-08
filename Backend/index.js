const express = require ("express");
const app = express();
const port = 8080;

app.get("/",(req,res)=>{
    res.send("hello, i am root");
});

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("hello, i am root");
});

app.get("/search",(req,res) =>{
    console.log(req.query);
    res.send("no results");
});

app.listen(port,() =>{
    console.log(`listenings to port ${port}`);
});
