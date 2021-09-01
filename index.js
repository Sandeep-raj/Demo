const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/world', (req,res)=>{
    res.send('world')
})

app.listen(3000)