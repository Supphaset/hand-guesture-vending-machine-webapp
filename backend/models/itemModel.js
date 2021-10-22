const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    qty:{
        type:Number,
        required:true,
        default:1
    },
    used:{
        type:Number,
        required:true,
        default:0
    }
})

const Item = mongoose.model('Item',itemSchema)

module.exports = Item