const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) => {
   res.sendFile(__dirname + '/index.html');
})

app.get('/contatti', (req,res) => {
    res.send('contatti')
})

app.get('/chi siamo', (req,res) => {
    res.send('contatti')
})



app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000')
})