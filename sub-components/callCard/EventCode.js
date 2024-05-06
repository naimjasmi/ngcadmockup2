// import node module libraries
import { useState } from 'react'
import { Col, Row, Card, Form, Button, Table, Alert } from 'react-bootstrap';

import useMounted from 'hooks/useMounted';
// import widget as custom components
import { FormSelect } from 'widgets';

import { Geolocation } from 'sub-components'

const EventCode = () => {
    const proximityOptions = [
        { value: 'At the address', label: 'At the address' },
        { value: 'One', label: 'One' },
        { value: 'Two', label: 'Two' },
        { value: 'Three', label: 'Three' }
    ];

    const dailyDigestOptions = [
        { value: 'Everyday', label: 'Everyday' },
        { value: 'One', label: 'One' },
        { value: 'Two', label: 'Two' },
        { value: 'Three', label: 'Three' }
    ];

    const departmentOptions = [
        { value: 'police', label: 'Police' },
        { value: 'One', label: 'One' },
        { value: 'Two', label: 'Two' },
        { value: 'Three', label: 'Three' }
    ];
    const levelOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' }
    ];
    const precintOptions = [
        { value: 'Precint2', label: 'Precint 2' },
        { value: 'Precint3', label: 'Precint 3' },
        { value: 'Precint4', label: 'Precint 4' },
    ];
    const cityOptions = [
        { value: 'ampang', label: 'AMPANG (SL)' },
        { value: 'pj', label: 'PETALING JAYA (SL)' },
        { value: 'puchong', label: 'PUCHONG (SL)' },
    ];

    return (
        <Row className="mb-8">
            <Col xl={7} lg={7} md={12} xs={12}>
                <Card >
                    <Card.Body>
                        <div className="mb-6">
                            <h4 className="mb-1">Incident</h4>
                        </div>
                        <Row>
                            <Col xl={3} md={12} className="mb-3">
                                <Form.Control as={FormSelect} defaultselected="Always" id="proximity" options={proximityOptions} />
                            </Col>
                            <Col xl={7} md={12} className="mb-3">
                                <Form.Control type="text" placeholder="Business Place / Location (Administrative Division)" id="fullName" required />
                            </Col>
                            <Col xl={2} md={12} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Level" id="time" options={levelOptions} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} md={12} className="mb-3">
                                <Form.Control type="text" placeholder="St. No" id="streetNo" required />
                            </Col>
                            <Col xl={6} md={12} className="mb-3">
                                <Form.Control type="text" placeholder="Street / Intersection" id="street" required />
                            </Col>
                            <Col xl={3} md={12} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Postal Code" id="postalCode" options={levelOptions} />
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={2} md={12} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Precint" id="precint" options={levelOptions} />
                            </Col>
                            <Col xl={5} md={12} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="City" id="City" options={levelOptions} />
                            </Col>
                            <Col xl={2} md={6} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Province" id="province" options={levelOptions} />
                            </Col>
                            <Col xl={3} md={6} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Postal Code" id="postalCode" options={levelOptions} />
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={4} md={12} className="mb-3">
                                <Form.Control type="text" placeholder="Phone No" id="phoneNo" required />
                            </Col>
                            <Col xl={2} md={12} className="mb-3">
                                <Form.Control type="text" placeholder="Phone Extension" id="phextension" required />
                            </Col>
                            <Col xl={6} md={12} className="mb-3">
                                <Form.Control type="text" placeholder="Crossing Street" id="crossingStreet" required />
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={4} md={12} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Direction" id="direction" options={levelOptions} />
                            </Col>
                            <Col xl={2} md={12} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Risk Level" id="riskLevel" options={levelOptions} />
                            </Col>
                            <Col xl={6} md={12} className="mb-3">
                                <Form.Control type="text" placeholder="Property Usage" id="propertyUsage" required />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={8} md={12} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Nature" id="nature" options={proximityOptions} />
                            </Col>
                            <Col xl={4} md={12} className="mb-3">
                                <Form.Control as={FormSelect} placeholder="Priority" id="priority" options={proximityOptions} />
                            </Col>

                            <hr className="my-6" />

                            <div className="mb-6">
                                <h4 className="mb-1">Caller</h4>
                            </div>
                            <Row className="mb-3">

                                <Col sm={12} className="mb-3 mb-lg-0">
                                    <Form.Control type="text" placeholder="Caller Name" id="name" required />
                                </Col>
                            </Row>
                            {/* row */}
                            <Row className="mb-3">
                                <Col sm={3}>
                                    <Form.Control type="text" placeholder="St. No" id="streetNo" required />
                                </Col>
                                <Col sm={5}>
                                    <Form.Control type="text" placeholder="Street / Intersection" id="intersection" required />
                                </Col>
                                <Col sm={4}>
                                    <Form.Control type="text" placeholder="Apartment" id="apartment" required />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col sm={3}>
                                    <Form.Control as={FormSelect} placeholder="Precint" id="precint" options={precintOptions} />
                                </Col>
                                <Col sm={5}>
                                    <Form.Control as={FormSelect} placeholder="City" id="city" options={cityOptions} />
                                </Col>
                                <Col sm={4}>
                                    <Form.Control type="text" placeholder="Postal Code" id="postalCode" required />
                                </Col>
                            </Row>
                            {/* row */}
                            <Row className="mb-3">
                                <Col md={12} xs={12}>
                                    <Form.Control type="text" placeholder="Enter Phone" id="phone" />
                                </Col>
                            </Row>

                            <Col xl={3} md={12}>
                                <Button variant="primary" type="submit">Create</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={5} lg={5} md={12} xs={12}>
                <Geolocation/>
            </Col>
        </Row>
    )
}

export default EventCode