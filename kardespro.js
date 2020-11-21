const express = require("express");
const app = express();
//random names generator modulunu indirin :)
var names = require('random-names-generator');
var allNames = names.all;
var krisim = names.random();

app.get("/api/rastgele/isim", (req,res) => {

res.json(krisim);
//Verileri JSON Formatda Tutcaz

});


app.listen(3030);
