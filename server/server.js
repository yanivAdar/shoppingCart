const express = require('express');
const server = express();

// server.use('')

server.get('/test', (req,res)=>{
    res.send('ok');
})

server.listen(4400, err => {
    if(err){
        console.log(err);    
    }
    console.log('server connected!');
    
})