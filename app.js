const express = require('express')
const app = express()
const port = process.env.Port||3000
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello World")
})
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


app.listen(port,()=>{
 console.log(`Server listen on port ${port}`)
})