import React, {useState,useEffect} from 'react'
import ItemStock from './ItemStock'
import axios from 'axios'

const LowItemList = () => {
    const [items, setitems] = useState([])
    useEffect(()=>{
        const fetchData = async() =>{
            const {data} =await axios.get('api/items')
            setitems(data)
        }
        fetchData()
    },[items])
    return (
        <div>
            <h2 className='my-3'>Few Stocks Left (Less than 3 items)</h2>
            <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col" style={{width:'80%'}}>Name</th>
                <th scope="col">Qty</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {items.map(item =>(
                item.qty <= 3 &&<ItemStock item={item}/>
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default LowItemList
