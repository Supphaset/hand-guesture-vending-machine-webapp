import React from 'react'
import BarChart from '../components/BarChart'
import { Col, Row } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import LowItemList from '../components/LowItemList'


const DashBoard = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h1>Chart</h1>
                    <BarChart/>
                </Col>
                <Col>
                    <LowItemList/>
                </Col>
            </Row>
        </div>
    )
}

export default DashBoard
