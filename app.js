const express = require('express');
const fs = require('fs');
const app = express();
let employees = [];
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        employees = JSON.parse(data)
    }else{
        console.log(err);
    }
});

app.get('/',(req, res) => {
    res.json(employees);
})
app.get('/user',(req, res) => {
    res.send("user page")
})
app.get('/client',(req, res) => {
    res.send("client page")
})
app.listen(3000, ()=>{
    console.log("server quruldu");
})