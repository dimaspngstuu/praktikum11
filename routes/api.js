//memanggil obj dari student controller
const obj = require('../controllers/StudentController')
//memanggil package express
const express = require('express')
//membuat object express
const route = express.Router()



route.get('/students',obj.index);
route.post('/students',obj.store)
route.put('/students/:id',obj.update)
route.delete('/students/:id',obj.destroy)


//mengexport

module.exports = route;