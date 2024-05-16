import { Card, Table, Badge, Button } from 'react-bootstrap';
import React, { useState } from 'react'; // Import useState from React

const AllIncident = ({ incidentDataList, resourceFieldValue }) => {
    // Dummy incidents
    const [lastCreatedRowIndex, setLastCreatedRowIndex] = useState(null);
    const dummyIncidents = [
        {
          callcardNo: 'ABC123',
          nature: 'Fire',
          streetNo: '123',
          level: 'Level 1',
          street: 'Main Street',
          precint: 'Precint2',
          postalCode: '12345',
          City: 'Ampang',
          province: 'Kuala Lumpur',
          direction: 'North',
          riskLevel: 'High',
          priority: 'Very High',
          name: 'Halimah Ja',
          phoneNo: '123-456-7890'
        },
        {
          callcardNo: 'DEF456',
          nature: 'Robbery',
          streetNo: '456',
          level: 'Level 2',
          street: 'First Avenue',
          precint: 'Precint3',
          postalCode: '54321',
          City: 'Petaling Jaya',
          province: 'Selangor',
          direction: 'South',
          riskLevel: 'Moderate',
          priority: 'High',
          name: 'Safick Salleh',
          phoneNo: '987-654-3210'
        },
        {
          callcardNo: 'GHI789',
          nature: 'Assault',
          streetNo: '789',
          level: 'Level 3',
          street: 'Second Street',
          precint: 'Precint4',
          postalCode: '67890',
          City: 'Puchong',
          province: 'Selangor',
          direction: 'East',
          riskLevel: 'Low',
          priority: 'Medium',
          name: 'Dwayne Pebble',
          phoneNo: '111-222-3333'
        },
        {
          callcardNo: 'JKL012',
          nature: 'Traffic Accident',
          streetNo: '012',
          level: 'Level 4',
          street: 'Third Avenue',
          precint: 'Precint5',
          postalCode: '09876',
          City: 'Kuala Lumpur',
          province: 'Kuala Lumpur',
          direction: 'West',
          riskLevel: 'Very High',
          priority: 'Very High',
          name: 'Raju Kumar Kamir',
          phoneNo: '444-555-6666'
        }
      ];
      

    // Merge dummy incidents with existing incidents
    const mergedIncidents = [...incidentDataList, ...dummyIncidents];

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
                            {mergedIncidents.map((incident, index) => (
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
                                    {index === lastCreatedRowIndex ? (
                                        <td className="align-middle">{incident.resource}</td>
                                    ) : (
                                        <td className="align-middle">-</td>
                                    )}
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
