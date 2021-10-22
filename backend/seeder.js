const dotenv = require('dotenv')
const Item = require('./models/itemModel')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const items = [
    {
        'name':'Item_1',
        'qty':3
    },
    {
        'name':'Item_2',
        'qty':3
    },
    {
        'name':'Item_3',
        'qty':3
    },
    {
        'name':'Item_4',
        'qty':3
    },
    {
        'name':'Item_5',
        'qty':3
    },
]

const importData = async () =>{
    try{
        await Item.deleteMany()
        await Item.insertMany(items)
        console.log('Data imported')
        process.exit()
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async () =>{
    try{
        await Item.deleteMany()
        console.log('Data destroyed')
        process.exit()
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

if (process.argv[2] == '-d'){
    destroyData()
}else{
    importData()
}