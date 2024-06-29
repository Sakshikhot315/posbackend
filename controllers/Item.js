const ItemModel = require('../models/Item')

const getItem=async(req,res)=>{
    try {
        const blog = await ItemModel.find()
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}



const createItem=async(req,res)=>{
    try {
        const blog = await ItemModel.create(req.body)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}

const editItem=async(req,res)=>{
    try {
        const {id} = req.params
        const blog = await ItemModel.findByIdAndUpdate(id,req.body)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteItem=async(req,res)=>{
    try {
        const {id} = req.params
        const blog = await ItemModel.findByIdAndDelete(id)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getItem,createItem,editItem,deleteItem}

