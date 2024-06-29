const express = require('express')

const router = express.Router()

const BillModel = require('../models/Bill')

const {createBill, getBill,deleteBill} = require('../controllers/Bill')

router.post('/create-bills',createBill)
router.get('/get-bills',getBill)
router.delete('/delete-bills/:id',deleteBill)
module.exports=router