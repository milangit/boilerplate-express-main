let express = require('express');
let app = express();
app.use('/public', express.static(__dirname + '/public'))
app.use((req, res, next) {
    console.log("I'm a middleware...");
    next();
  }
)

console.log("Hello World");

// app.get("/", (req,res)=>{
//     res.send('Hello Express')
// }
// )

app.get("/", (req,res)=>{
        res.sendFile(__dirname + '/views/index.html')
    }
)

app.get("/json", (req,res)=>{
    // console.log(process.env.MESSAGE_STYLE)
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()})
    }
    else {
        res.json({"message": "Hello json"})
    }    
}
)




































 module.exports = app;
