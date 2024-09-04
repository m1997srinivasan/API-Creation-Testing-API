const express = require("express");

const createproject = (req, res) => {
    res.send( "Hey! Welcome to Dashboard");
}

const getproject = (req, res) => {
    res.send("Hello user! Welcome to Express JS");
}

const updateproject = (req, res) => {
    res.send("Deep dive into your ExpressJS Journey!");
}


const deleteproject = (req, res) => {
    res.send("Delete your data");
}


module.exports={createproject,getproject,updateproject,deleteproject};