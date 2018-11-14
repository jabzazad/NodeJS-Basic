const express = require('express')
const app = express()
const port = process.env.Port||3000

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
app.listen(port,()=>{
 console.log(`Server listen on port ${port}`)
})