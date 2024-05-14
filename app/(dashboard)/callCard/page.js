'use client'
import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { CallerDetail, AllIncident, Comment, Resource } from 'sub-components'; // Adjust the path as needed

const CallCard = () => {
  const [incidentData, setIncidentData] = useState(null);
  const [callerFormData, setCallerFormData] = useState(null);
  const [incidentDataList, setIncidentDataList] = useState([]);

  const handleIncidentData = (data) => {
    setIncidentData(data);
  };

  const handleFormSubmit = (formData) => {
    // Set caller form data
    setIncidentDataList([...incidentDataList, formData]);
    
    // Update incident data if needed
    const updatedIncidentData = {
      // Update the incident data based on formData or any other logic
    };
    setIncidentData(updatedIncidentData);
  };

  return (
    <Container fluid className="px-6 py-4">
      <Row className="justify-content-center">
        <Col xl={2} lg={6} md={6} xs={12}>
          <Comment />
        </Col>
        <Col xl={6} lg={6} md={6} xs={12}>
          {/* Pass handleFormSubmit as a prop */}
          <CallerDetail onFormSubmit={handleFormSubmit} />
        </Col>
        <Col xl={4} lg={12} md={12} xs={12}>
          <Resource />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl={12} lg={12} md={12} xs={12}>
          {/* Pass incidentData and callerFormData to AllIncident */}
          <AllIncident incidentDataList={incidentDataList} />
        </Col>
      </Row>
    </Container>
  );
};

export default CallCard;
