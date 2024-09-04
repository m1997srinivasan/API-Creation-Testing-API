const express = require("express");

const router=express.Router();
const {createproject,getproject,updateproject,deleteproject}= require('../Controller/dashboardcontroller')

router.get("/home",getproject );

router.get("/quotes", (req, res) => {
    res.send("Please given Your Name:");
});

router.get("/quotes/:id", (req, res) => {
    res.send( "Hey have a nice day!");
});

router.post("/quotes", createproject );

router.patch("/quotes/:id",updateproject );

router.delete("/quotes/:id",deleteproject );

module.exports=router;
