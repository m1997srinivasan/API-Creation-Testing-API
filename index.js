// syntax for import Express App
const express = require("express");

//setting up Express js
const app = express();

const PORT = 7030;

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

const dashboardroutes = require("./routes/dashboardroutes");

app.use("/dashboard",dashboardroutes);



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})