import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <div >
            <img style={{width:'100%'}} src='/images/messageImage_1634831159102.jpg'/>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                <h3 className='my-3'>Our Inspiration</h3>
                <p>We have seen a lot of people in society always forget what to buy when they went to grocery shopping. So we want to create a vending machine at home that can help them check the stock of their food or snack real time.</p>
                <Row>
                    <Col>
                    <Link to='/stock'>
                        <button type="button" class="btn btn-primary my-3" style={{height:'4rem'}}>My Stock</button>   
                    </Link>
                    </Col>
                    <Col>
                    <Link to='/dashboard'>
                        <button type="button" class="btn btn-primary my-3 " style={{height:'4rem'}}>My Dashboard</button>   
                    </Link>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

export default HomeScreen
