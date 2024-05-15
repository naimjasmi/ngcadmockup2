import React from 'react';
import { Card, Table } from 'react-bootstrap';

const AllIncident = ({ incidentDataList }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <div className="mb-3">
                    <h4 className="mb-1">All Incidents</h4>
                </div>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Adjust maxHeight as needed */}
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th>Call Card No.</th>
                                <th>Nature</th>
                                <th>Incident Location</th>
                                <th>Risk Level</th>
                                <th>Priority</th>
                                <th>Caller Name</th>
                                <th>Caller Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incidentDataList.map((incident, index) => (
                                <tr key={index}>
                                    <td>{incident.callcardNo}</td>
                                    <td>{incident.nature}</td>
                                    <td>
                                        {`No.
                                        ${incident.streetNo}
                                        ${incident.street}, 
                                        ${incident.precint}, 
                                        ${incident.postalCode}, 
                                        ${incident.City}, 
                                        ${incident.province}
                                        `}
                                    </td>
                                    <td>{incident.riskLevel}</td>
                                    <td>{incident.priority}</td>
                                    <td>{incident.name}</td>
                                    <td>{incident.phoneNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};


export default AllIncident;
