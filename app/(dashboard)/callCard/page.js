// page.js

'use client'
import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { CallerDetail, AllIncident, Comment, Resource } from 'sub-components';

const CallCard = () => {
  const [incidentDataList, setIncidentDataList] = useState([]);
  const [resourceFieldValue, setResourceFieldValue] = useState('');

  const updateResourceField = (resName) => {
    setResourceFieldValue(resName);
  };

  const handleFormSubmit = (formData) => {
    const updatedFormData = { ...formData, resource: resourceFieldValue };
    setIncidentDataList([...incidentDataList, updatedFormData]);
  };

  return (
    <Container fluid className="px-6 py-4">
      <Row className="justify-content-center">
        <Col xl={2} lg={6} md={6} xs={12}>
          <Comment />
        </Col>
        <Col xl={6} lg={6} md={6} xs={12}>
          <CallerDetail onFormSubmit={handleFormSubmit} resourceFieldValue={resourceFieldValue} />
        </Col>
        <Col xl={4} lg={12} md={12} xs={12}>
          <Resource onUpdateResource={updateResourceField} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl={12} lg={12} md={12} xs={12}>
          <AllIncident incidentDataList={incidentDataList} resourceFieldValue={resourceFieldValue} />
        </Col>
      </Row>
    </Container>
  );
};

export default CallCard;

