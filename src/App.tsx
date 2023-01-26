import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

function App() {

    const [areaWidth, setAreaWidth] = useState(0) // ft
    const [areaHeight, setAreaHeight] = useState(0) // ft
    const [areaPercent, setAreaPercent] = useState(10) // 10% addition

    const [resultArea, setResultArea] = useState(0) // ft^2


    const calculateArea = () => {
        const initialArea = (areaWidth * areaHeight) * 144
        const percentArea = initialArea / 100 * areaPercent
        setResultArea(Math.ceil(initialArea + percentArea))
    }

    useEffect(() => {
        calculateArea()
    }, [calculateArea])

    return (
        <div className="container">
            <h1>Tiles calculator</h1>
            <Form>
                <Row className="row">
                    <Col className="col-md-4">
                        <FormGroup>
                            <Label> Area Width, ft </Label>
                            <Input min='0' type="number" value={areaWidth} onChange={e => {
                                setAreaWidth(+e.target.value)
                                calculateArea()
                            }}/>
                        </FormGroup>
                    </Col>
                    <Col className="col-md-4">
                        <FormGroup>
                            <Label> Area Height, ft </Label>
                            <Input min='0' type="number" value={areaHeight} onChange={e => {
                                setAreaHeight(+e.target.value)
                                calculateArea()
                            }}/>
                        </FormGroup>
                    </Col>
                    <Col className="col-md-4">
                        <FormGroup>
                            <Label> Area Addition Percent </Label>
                            <Input min='0' type="number" value={areaPercent} onChange={e => {
                                setAreaPercent(+e.target.value)
                                calculateArea()
                            }}/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>

            <>
                <h5>Area: {resultArea} sq in</h5>
            </>
        </div>
    );
}

export default App;
