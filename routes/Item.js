const express = require('express')

const router = express.Router()

const ItemModel = require('../models/Item')

const {getItem,createItem,editItem,deleteItem} = require('../controllers/Item')

router.get('/get-items',getItem)

router.post('/create-items',createItem)

router.put('/edit-items/:id',editItem)

router.delete('/delete-items/:id',deleteItem)

module.exports=router