import React, { useState } from 'react';
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image, Form } from 'react-bootstrap';
import { FormSelect } from 'widgets';

const AllIncident = () => {

    const proximityOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' }
    ];

    const availabilityOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' }
    ];

    return (
        <Row>
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white py-4">
                        <Row>
                            <Col xl={6} lg={6} md={6} xs={4}>
                                <div className="ms-lg-3 d-none d-md-none d-lg-block">
                                    {/* Select Resource */}
                                    <Form.Control as={FormSelect} defaultselected="Always" id="proximity" options={proximityOptions} />
                                </div>
                            </Col>
                            <Col xl={2} lg={2} md={2} xs={4}>
                                <div className="ms-lg-3 d-none d-md-none d-lg-block">
                                    {/* Select Availability */}
                                    <Form.Control as={FormSelect} defaultselected="All" id="availability" options={availabilityOptions} />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} xs={4}>
                                <div className="ms-lg-3 d-none d-md-none d-lg-block">
                                    {/* Search Form */}
                                    <Form className="d-flex align-items-center">
                                        <Form.Control type="search" placeholder="Search" />
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <div style={{ maxHeight: '690px', overflowY: 'auto' }}>
                        <Table responsive className="text-nowrap mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Callcard No</th>
                                    <th>Address</th>
                                    <th>Nature</th>
                                    <th>Res.</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-middle"></td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle">
                                        <button className="btn btn-sm btn-primary">Dispatch</button>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All Incident</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default AllIncident;
