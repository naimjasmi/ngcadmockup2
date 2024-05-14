import React from 'react';
import { Card, Table } from 'react-bootstrap';

const AllIncident = ({ incidentData, callerFormData }) => {
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
                        {callerFormData && (
                            <tr>
                                <td>{callerFormData.nature}</td>
                                <td>{callerFormData.city}</td>
                                <td>{callerFormData.riskLevel}</td>
                                <td>{callerFormData.fullName}</td>
                                <td>{callerFormData.phoneNo}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};


export default AllIncident;
