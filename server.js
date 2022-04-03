//https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
//found my answer as to why its included. its like when you download a
//package from linux lets say "Vlc media player" vlc need a couple
//dependancies like video codecs, render frameworks and so on. 
//when you download software on osx or windows those dependancies are already packaged into the executable 
//its the nature of package managers and when it need other packages/dependencies to run. 


const express = require("express")
const app = express()
const port = 3000

app.get("/", (req,res)=>{
    res.send(`test`)
})





app.listen(port, () => {
    console.log("Express is listening on port: ", port)
})