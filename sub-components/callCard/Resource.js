import React, { useState } from 'react';
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image, Form } from 'react-bootstrap';
import { FormSelect } from 'widgets';
import { ResourceData as initialResourceData } from '/data/resource/ResourceData';

const Resource = () => {
    const [resourceData, setResourceData] = useState(initialResourceData);
    const [filteredData, setFilteredData] = useState(initialResourceData);
    const [selectedProximity, setSelectedProximity] = useState('All Resources');
    const [selectedAvailability, setSelectedAvailability] = useState('All');

    const proximityOptions = [
        { value: 'All Resources', label: 'All Resources' },
        { value: '/images/brand/ambulance-logo.svg', label: 'All Ambulance Resouces' },
        { value: '/images/brand/firefighter-logo.svg', label: 'All Firefighter Resources' },
        { value: '/images/brand/police-logo.svg', label: 'All Police Resources' }
    ];

    const availabilityOptions = [
        { value: 'All', label: 'All' },
        { value: 'Available', label: 'Available' },
        { value: 'Unavailable', label: 'Unavailable' },
        { value: 'Dispatched', label: 'Dispatched' },
        { value: 'At Scene', label: 'At Scene' }
    ];

    const handleAvailabilityChange = (selectedOption) => {
        setSelectedAvailability(selectedOption);
        let filtered = resourceData;

        if (selectedOption !== 'All') {
            // Filter data based on selected availability
            filtered = filtered.filter(item => item.priority === selectedOption);
        }

        // Apply proximity filter if it's already active
        if (selectedProximity !== 'All Resources') {
            filtered = filtered.filter(item => item.brandLogo === selectedProximity);
        }

        setFilteredData(filtered);
    };

    const handleProximityChange = (selectedOption) => {
        setSelectedProximity(selectedOption);
        let filtered = resourceData;

        if (selectedOption !== 'All Resources') {
            // Filter data based on selected proximity
            filtered = filtered.filter(item => item.brandLogo === selectedOption);
        }

        // Apply availability filter if it's already active
        if (selectedAvailability !== 'All') {
            filtered = filtered.filter(item => item.priority === selectedAvailability);
        }

        setFilteredData(filtered);
    };

    const handleDispatch = (item) => {
        const updatedData = resourceData.map((resource) => {
            if (resource.id === item.id) {
                return { ...resource, priority: 'Dispatched', priorityBadgeBg: 'warning' };
            }
            return resource;
        });
        setResourceData(updatedData);
        setFilteredData(updatedData);
    };

    return (
        <Row>
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white py-4">
                        <Row>
                            <Col xl={6} lg={6} md={6} xs={4}>
                                <div className="ms-lg-3 d-none d-md-none d-lg-block">
                                    {/* Select Resource */}
                                    <Form.Control as={FormSelect} defaultselected="Always" id="proximity" options={proximityOptions} onChange={(e) => handleProximityChange(e.target.value)} />
                                </div>
                            </Col>
                            <Col xl={2} lg={2} md={2} xs={4}>
                                <div className="ms-lg-3 d-none d-md-none d-lg-block">
                                    {/* Select Availability */}
                                    <Form.Control as={FormSelect} defaultselected="All" id="availability" options={availabilityOptions} onChange={(e) => handleAvailabilityChange(e.target.value)} />
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
                                    <th>Service</th>
                                    <th>Res.</th>
                                    <th>Status</th>
                                    <th>Last Status Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="align-middle">
                                                <div className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}>
                                                    <Image src={item.brandLogo} alt="" />
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <h5 className=" mb-1">
                                                    <Link href="#" className="text-inherit">{item.resName}</Link>
                                                </h5>
                                            </td>
                                            <td className="align-middle"><span className={`badge bg-${item.priorityBadgeBg}`}>{item.priority}</span></td>
                                            <td className="align-middle">{item.datime}</td>
                                            <td className="align-middle">
                                                {item.priority === "Available" ? (
                                                    <button className="btn btn-sm btn-primary" onClick={() => handleDispatch(item)}>Dispatch</button>
                                                ) : (
                                                    <button className="btn btn-sm btn-secondary" disabled>Dispatch</button>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All Resources</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default Resource;
