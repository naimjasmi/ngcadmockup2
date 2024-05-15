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
                            <th>Type</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Caller Name</th>
                            <th>Caller Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incidentDataList.map((incident, index) => (
                            <tr key={index}>
                                <td>{incident.callcardNo}</td>
                                <td>{incident.nature}</td>
                                <td>{incident.city}</td>
                                <td>{incident.riskLevel}</td>
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
