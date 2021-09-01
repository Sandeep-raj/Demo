const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/world', (req,res)=>{
    res.send('world')
})

app.listen(3000)