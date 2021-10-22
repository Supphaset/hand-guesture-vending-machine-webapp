import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ItemStock from '../components/ItemStock'

const StockScreen = () => {
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
            <h1 className='my-3'>My Stock</h1>
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
                <ItemStock item={item}/>
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default StockScreen
