const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('homepage');
})


const PORT = 3000 || process.env.PORT;

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));

