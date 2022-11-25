const express = require('express');
const bodyParser= require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

app.post('/',(req,res)=>{
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const add= n1+n2
    res.send('The Value is  ' +  add)
    
    
})

 app.listen(3001,(res)=>{
    console.log('listening on port 3001');
 })