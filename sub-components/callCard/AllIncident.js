import React from 'react';
import { Card, Table } from 'react-bootstrap';

const AllIncident = ({ incidentDataList }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <div className="mb-3">
                    <h4 className="mb-1">All Incidents</h4>
                </div>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Status</th>
                            {/* Add additional columns for caller form data */}
                            <th>Caller Name</th>
                            <th>Caller Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incidentDataList.map((incident, index) => (
                            <tr key={index}>
                                <td>{incident.nature}</td>
                                <td>{incident.city}</td>
                                <td>{incident.riskLevel}</td>
                                <td>{incident.fullName}</td>
                                <td>{incident.phoneNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};


export default AllIncident;
