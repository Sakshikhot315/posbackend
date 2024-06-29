const BillModel = require('../models/Bill')

const createBill = async(req,res)=>{
    try {
        const bill = await BillModel.create(req.body)
        res.status(200).json(bill)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getBill = async(req,res)=>{
    try {
        const bill = await BillModel.find()
        res.status(200).json(bill)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteBill = async(req,res)=>{
    try {
        const {id} = req.params
        const bill = await BillModel.findByIdAndDelete(id)
        res.status(200).json(bill)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={createBill,getBill,deleteBill}