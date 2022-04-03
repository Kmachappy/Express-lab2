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

app.get("/greeting/", (req,res)=>{
    res.send(`Hello, stranger`)
})

app.get("/greeting/:name", (req,res)=>{
    res.send(`Wow! Hello There, ${req.params.name}`)
})

app.get("/tip/:total/:tipPercentage", (req,res)=>{
    const tip = (100 * parseInt(req.params.tipPercentage) / parseInt(req.params.total))
    res.send(`${tip}`)
})

app.get("/magic/:question", (req,res)=>{
    const question = req.params.question
    const magicballResponces = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const random = magicballResponces[Math.floor(Math.random()*magicballResponces.length)]
    res.send(`<body style="background-color: #99BAA8">${question}
              <h1 style="color:red">${random}</h1>  
              </body>`)
})


app.listen(port, () => {
    console.log("Express is listening on port: ", port)
})