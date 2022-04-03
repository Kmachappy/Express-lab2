//npm install <package-name> --save-dev

const express = require("express")
const app = express()
const port = 3000


app.get("/:number_of_bottles", (req,res)=>{
    const bottles = parseInt(req.params.number_of_bottles)
    const newBottles = bottles - 1
    
    if(newBottles !=0 ){
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall
    <br/>
    <br/>
    <a href="/${newBottles}">take one down, pass it around</a>
    `)}else{
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall
    <br/>
    <br/>
    <a href="/99">Took all down, restart!</a>
    `)}

})//event listener?



app.listen(port, () => {
    console.log("Express is listening on port: ", port)
})