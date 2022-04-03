//npm install <package-name> --save-dev

const express = require("express")
const app = express()
const port = 3000


app.get("/", (req,res)=>{
    res.send(`99 Bottles of beer on the wall
    
    <br/>
    <br/>
    <a href="/">take one down, pass it around</a>
`)
})



app.listen(port, () => {
    console.log("Express is listening on port: ", port)
})