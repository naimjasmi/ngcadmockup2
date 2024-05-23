'use client'
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types for type checking
import { Col, Row, Container } from 'react-bootstrap';
import { CallerDetail, AllIncident, Comment, Resource } from 'sub-components'; // Adjust the path as needed

const CallCard = () => {
  const [incidentDataList, setIncidentDataList] = useState([]);
  const [resourceFieldValue, setResourceFieldValue] = useState('');

  const updateResourceField = (resName) => {
    setResourceFieldValue(resName);
  };

  const handleFormSubmit = (formData) => {
    // Set caller form data
    const updatedFormData = { ...formData, resource: resourceFieldValue }; // Include resource field
    setIncidentDataList([...incidentDataList, updatedFormData]);
  };

  // Ensure this component is only rendered on the client-side
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Container fluid className="px-6 py-4">
      <Row className="justify-content-center">
        <Col xl={2} lg={6} md={6} xs={12}>
          <Comment />
        </Col>
        <Col xl={6} lg={6} md={6} xs={12}>
          {/* Pass handleFormSubmit as a prop */}
          <CallerDetail onFormSubmit={handleFormSubmit} resourceFieldValue={resourceFieldValue} />
        </Col>
        <Col xl={4} lg={12} md={12} xs={12}>
          {/* Pass updateResourceField as a prop */}
          <Resource onUpdateResource={updateResourceField} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl={12} lg={12} md={12} xs={12}>
          {/* Pass incidentData and callerFormData to AllIncident */}
          <AllIncident incidentDataList={incidentDataList} resourceFieldValue={resourceFieldValue} />
        </Col>
      </Row>
    </Container>
  );
};

// Prop types for better type checking
CallCard.propTypes = {
  incidentDataList: PropTypes.array,
  resourceFieldValue: PropTypes.string,
  handleFormSubmit: PropTypes.func,
  updateResourceField: PropTypes.func,
};

export default CallCard;
