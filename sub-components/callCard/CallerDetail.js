import React, { useState } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';

const CallerDetail = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    callcardNo: '',
    fullName: '',
    time: '',
    streetNo: '',
    street: '',
    postalCode: '',
    precint: '',
    City: '',
    province: '',
    phoneNo: '',
    phextension: '',
    crossingStreet: '',
    direction: '',
    riskLevel: '',
    propertyUsage: '',
    nature: '',
    priority: '',
    name: '',
    intersection: '',
    apartment: '',
    city: '',
    callerPostalCode: '',
    phone: ''
  });

  const levelOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
  ];

  const proximityOptions = [
    { value: 'At the address', label: 'At the address' },
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' }
  ];

  const precintOptions = [
    { value: 'Precint2', label: 'Precint 2' },
    { value: 'Precint3', label: 'Precint 3' },
    { value: 'Precint4', label: 'Precint 4' },
  ];
  const cityOptions = [
    { value: 'ampang', label: 'AMPANG (SL)' },
    { value: 'pj', label: 'PETALING JAYA (SL)' },
    { value: 'puchong', label: 'PUCHONG (SL)' },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onFormSubmit and pass the form data
    onFormSubmit(formData); 
    console.log(formData); // For demonstration
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="mb-3">
          <h4 className="mb-1">Incident</h4>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xl={3} md={12} className="mb-3">
              <Form.Control as="select" defaultValue="Always" id="proximity" onChange={handleChange}>
                {proximityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={7} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Business Place / Location (Administrative Division)" id="fullName" onChange={handleChange} required />
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control as="select" defaultValue="Level" id="time" onChange={handleChange}>
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col xl={3} md={12} className="mb-3">
              <Form.Control type="text" placeholder="St. No" id="streetNo" onChange={handleChange} required />
            </Col>
            <Col xl={6} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Street / Intersection" id="street" onChange={handleChange} required />
            </Col>
            <Col xl={3} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Postal Code" id="postalCode" onChange={handleChange} required />
            </Col>
          </Row>
          <Row>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control as="select" placeholder="Precint" id="precint" onChange={handleChange}>
                {precintOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={5} md={12} className="mb-3">
              <Form.Control as="select" placeholder="City" id="City" onChange={handleChange}>
                {cityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={2} md={6} className="mb-3">
              <Form.Control as="select" placeholder="Province" id="province" onChange={handleChange}>
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={3} md={6} className="mb-3">
              <Form.Control type="text" placeholder="Postal Code" id="callerPostalCode" onChange={handleChange} required />
            </Col>
          </Row>
          <Row>
            <Col xl={4} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Phone No" id="phoneNo" onChange={handleChange} required />
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Phone Extension" id="phextension" onChange={handleChange} required />
            </Col>
            <Col xl={6} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Crossing Street" id="crossingStreet" onChange={handleChange} required />
            </Col>
          </Row>
          <Row>
            <Col xl={4} md={12} className="mb-3">
              <Form.Control as="select" placeholder="Direction" id="direction" onChange={handleChange}>
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control as="select" placeholder="Risk Level" id="riskLevel" onChange={handleChange}>
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={6} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Property Usage" id="propertyUsage" onChange={handleChange} required />
            </Col>
          </Row>
          <Row>
            <Col xl={8} md={12} className="mb-3">
              <Form.Control as="select" placeholder="Nature" id="nature" onChange={handleChange}>
                {proximityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={4} md={12} className="mb-3">
              <Form.Control as="select" placeholder="Priority" id="priority" onChange={handleChange}>
                {proximityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
          <hr className="my-6" />
          <div className="mb-6">
            <h4 className="mb-1">Caller</h4>
          </div>
          <Row className="mb-3">
            <Col sm={12} className="mb-3 mb-lg-0">
              <Form.Control type="text" placeholder="Caller Name" id="name" onChange={handleChange} required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={3}>
              <Form.Control type="text" placeholder="St. No" id="streetNo" onChange={handleChange} required />
            </Col>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Street / Intersection" id="intersection" onChange={handleChange} required />
            </Col>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Apartment" id="apartment" onChange={handleChange} required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={3}>
              <Form.Control as="select" placeholder="Precint" id="precint" onChange={handleChange}>
                {precintOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col sm={5}>
              <Form.Control as="select" placeholder="City" id="city" onChange={handleChange}>
                {cityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Postal Code" id="postalCode" onChange={handleChange} required />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12} xs={12}>
              <Form.Control type="text" placeholder="Enter Phone" id="phone" onChange={handleChange} />
            </Col>
          </Row>
          <Row>
            <Col xl={3} md={12}>
              <Button variant="primary" type="submit">Create</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CallerDetail;
