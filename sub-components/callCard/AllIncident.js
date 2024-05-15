import React from 'react';
import { Card, Table, Badge, Button } from 'react-bootstrap';

const AllIncident = ({ incidentDataList }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <div className="mb-3">
                    <h4 className="mb-1">All Incidents</h4>
                </div>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Call Card No.</th>
                                <th>Nature</th>
                                <th>Incident Location</th>
                                <th>Direction</th>
                                <th>Risk Level</th>
                                <th>Priority</th>
                                <th>Caller Name</th>
                                <th>Caller Phone No.</th>
                                <th>Resource</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incidentDataList.map((incident, index) => (
                                <tr key={index}>
                                    <td className="align-middle">{incident.callcardNo}</td>
                                    <td className="align-middle">{incident.nature}</td>
                                    <td className="align-middle">
                                        {`No. ${incident.streetNo},
                     ${incident.level} ${incident.street}, 
                     ${incident.precint}, 
                     ${incident.postalCode}, 
                     ${incident.City}, 
                     ${incident.province}`}
                                    </td>
                                    <td className="align-middle">{incident.direction}</td>
                                    <td className="align-middle">
                                        <Badge pill className={`bg-${getRiskLevelColor(incident.riskLevel)}`}>
                                            {incident.riskLevel}
                                        </Badge>
                                    </td>
                                    <td className="align-middle">
                                        <Badge pill className={`bg-${getPriorityColor(incident.priority)}`}>
                                            {incident.priority}
                                        </Badge>
                                    </td>
                                    <td className="align-middle">{incident.name}</td>
                                    <td className="align-middle">{incident.phoneNo}</td>
                                    <td className="align-middle">{incident.phoneNo}</td>
                                    <td className="align-middle">
                                        <button className="btn btn-sm btn-outline-success" onClick={() => handleView(incident)}>View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

// Function to determine badge color class based on risk level
const getRiskLevelColor = (riskLevel) => {
    switch (riskLevel) {
        case 'Low':
            return 'success';
        case 'Moderate':
            return 'info';
        case 'High':
            return 'warning';
        case 'Very High':
            return 'danger';
        default:
            return 'secondary';
    }
};

// Function to determine badge color class based on priority
const getPriorityColor = (priority) => {
    switch (priority) {
        case 'Low':
            return 'success';
        case 'Medium':
            return 'info';
        case 'High':
            return 'warning';
        case 'Very High':
            return 'danger';
        default:
            return 'secondary';
    }
};

const handleView = (incident) => {
    // Implement the logic to handle the view action here
    console.log('View incident:', incident);
};

export default AllIncident;
