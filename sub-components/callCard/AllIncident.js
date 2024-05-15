import React from 'react';
import { Card, Table, Badge } from 'react-bootstrap';

const AllIncident = ({ incidentDataList }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="mb-3">
          <h4 className="mb-1">All Incidents</h4>
        </div>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Table responsive hover>
            <thead className="table-light">
              <tr>
                <th>Call Card No.</th>
                <th>Nature</th>
                <th>Incident Location</th>
                <th>Direction</th>
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
                    {`No. ${incident.streetNo},
                     ${incident.level} ${incident.street}, 
                     ${incident.precint}, 
                     ${incident.postalCode}, 
                     ${incident.City}, 
                     ${incident.province}`}
                  </td>
                  <td>{incident.direction}</td>
                  <td>
                    <Badge pill className={`bg-${getRiskLevelColor(incident.riskLevel)}`}>
                      {incident.riskLevel}
                    </Badge>
                  </td>
                  <td>
                    <Badge pill className={`bg-${getPriorityColor(incident.priority)}`}>
                      {incident.priority}
                    </Badge>
                  </td>
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

export default AllIncident;
