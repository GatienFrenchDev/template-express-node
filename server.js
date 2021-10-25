const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', express.static(__dirname + '/public/'));

app.listen(80, () =>{
    console.log('🚀 serveur lancé ! http://127.0.0.1:80')
})