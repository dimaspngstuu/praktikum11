//import express
const express = require('express');

//buat object express
const index = express();

//menggunakan middleware
index.use(express.json());

//memanggil hasil export dari file api.js
const route = require('./routes/api');

index.use(route);


//membuat port
index.listen(8000,()=>{
    console.log('Server Running at https:/localhost');
});