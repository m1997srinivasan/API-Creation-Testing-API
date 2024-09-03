const express = require("express");

const router=express.Router();

router.get("/home", (req, res) => {
    res.send("Hello user! Welcome to Express JS");
});

router.get("/quotes", (req, res) => {
    res.send("Please given Your Name:");
});

router.get("/quotes/:id", (req, res) => {
    res.send( "Hey have a nice day!");
});

router.post("/quotes", (req, res) => {
    res.send( "Hey! Welcome to Dashboard");
});

router.patch("/quotes/:id", (req, res) => {
    res.send("Deep dive into your ExpressJS Journey!")
});

router.delete("/quotes/:id", (req, res) => {
    res.send("Delete your data");
});

module.exports=router;
