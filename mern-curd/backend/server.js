const express = require("express");

//express App
const app =express();

//routes
app.get('/' ,  (req ,res)=>{
    res.json({mes:'welcome to the app'})
})


// listen for requests
app.listen(4000,()=>{
    console.log("Listening on port 4000")
})