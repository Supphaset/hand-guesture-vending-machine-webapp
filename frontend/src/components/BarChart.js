import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    const [items,setItem] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const {data} = await axios.get('api/items')
            setItem(data)
        }
        fetchData()
    },[items])
    const data = {
        labels: [...items.map(item=>item.name)],
        datasets: [
            {
            label: 'Used Item',
            data: [...items.map(item=>item.used)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
            },
        ],
        };

    return (
        <div>
            <Bar data={data}/>
        </div>
    )
}

export default BarChart