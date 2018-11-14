const path=require('path')
const ejs=require('ejs')
const express = require('express')
const morgan = require('morgan')
const todos = require("./routes/todos")
const app = express()
const port = process.env.Port||3000
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/todos",todos)
if(app.get('env')==='development'){
    app.use(morgan('dev'))
}
app.use(express.static('public'))
// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })

app.post('/',(req,res)=>{
    res.send('Got a POST request')
})
app.put('/user',function(req,res){
res.send('Got a PUT request at /user')
})
app.delete('/user',function(req,res){
    res.send('Got a DELETE request at /user')
})
app.get('/greeting/:name',(req,res)=>{
    console.log(req.params)
    const {name}=req.params
    res.send(`Hello ${name}`)
})
app.get('/greeting/',(req,res)=>{
console.log(req.query)
const {name}=req.query
res.send(`Hello ${name}`)
})
app.post('/message',function (req,res){
    console.log(req.body)
    res.send('Got a POST request')
})
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index',{name:"Padchara"})
})

app.listen(port,()=>{
 console.log(`Server listen on port ${port}`)
})