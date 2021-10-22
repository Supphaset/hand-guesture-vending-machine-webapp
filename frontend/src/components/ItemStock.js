import React from 'react'
import axios from 'axios'

const ItemStock = ({item}) => {
    const plusHandler = async() =>{
        await axios.put(`api/plus/${item._id}`)
        console.log('plus')
    }
    const subtractHandler = async() =>{
        await axios.put(`api/subtract/${item._id}`)
        console.log('subtract')
    }
    return (
        <>
            <tr>
            <th scope="row">{item.name}</th>
            <td>{item.qty}</td>
            <th scope='col'><div class="btn-group" role="group" aria-label="Basic example">
            <button onClick={subtractHandler} type="button" class="btn btn-primary">-</button>
            <button onClick={plusHandler} type="button" class="btn btn-primary">+</button>
            </div></th>
            </tr>
        </>
    )
}

export default ItemStock
