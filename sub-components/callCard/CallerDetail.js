import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Col, Row, FormSelect } from 'react-bootstrap';

const CallerDetail = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    callcardNo: '',
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
    phone: ''
  });

  const levelOptions = [
    { value: '', label: 'Level' }, // Placeholder option
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
  ];
  const directionOptions = [
    { value: '', label: 'Direction' }, // Placeholder option
    { value: 'North', label: 'North' },
    { value: 'South', label: 'South' },
    { value: 'East', label: 'East' },
    { value: 'West', label: 'West' },
    { value: 'Northeast', label: 'Northeast' },
    { value: 'Northwest', label: 'Northwest' },
    { value: 'Southeast', label: 'Southeast' },
    { value: 'Southwest', label: 'Southwest' }
  ];
  const provinceOptions = [
    { value: '', label: 'Province' }, // Placeholder option
    { value: 'Johor', label: 'Johor' },
    { value: 'Kedah', label: 'Kedah' },
    { value: 'Kelantan', label: 'Kelantan' },
    { value: 'Melaka', label: 'Melaka' },
    { value: 'Negeri Sembilan', label: 'Negeri Sembilan' },
    { value: 'Pahang', label: 'Pahang' },
    { value: 'Perak', label: 'Perak' },
    { value: 'Perlis', label: 'Perlis' },
    { value: 'Pulau Pinang', label: 'Pulau Pinang' },
    { value: 'Sabah', label: 'Sabah' },
    { value: 'Sarawak', label: 'Sarawak' },
    { value: 'Selangor', label: 'Selangor' },
    { value: 'Terengganu', label: 'Terengganu' },
    { value: 'Kuala Lumpur', label: 'Kuala Lumpur' },
    { value: 'Labuan', label: 'Labuan' },
    { value: 'Putrajaya', label: 'Putrajaya' }
  ];

  const risklevelOptions = [
    { value: '', label: 'Risk Level' }, // Placeholder option
    { value: 'Low', label: 'Low' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'High', label: 'High' },
    { value: 'Very High', label: 'Very High' }
  ];

  const proximityOptions = [
    { value: '', label: 'Proximity' }, // Placeholder option
    { value: 'At the address', label: 'At the address' },
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' }
  ];

  const natureCodeOptions = [
    { value: '', label: 'Nature Code' }, // Placeholder option
    { value: 'Fire', label: 'Fire' },
    { value: 'Kidnapping', label: 'Kidnapping' },
    { value: 'Robbery', label: 'Robbery' },
    { value: 'Assault', label: 'Assault' },
    { value: 'Burglary', label: 'Burglary' },
    { value: 'Traffic Accident', label: 'Traffic Accident' },
  ];

  const priorityOptions = [
    { value: '', label: 'Priority' }, // Placeholder option
    { value: 'Low', label: 'Low' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'High', label: 'High' },
    { value: 'Very High', label: 'Very High' }
  ];

  const precintOptions = [
    { value: '', label: 'Precint' }, // Placeholder option
    { value: 'Precint2', label: 'Precint 2' },
    { value: 'Precint3', label: 'Precint 3' },
    { value: 'Precint4', label: 'Precint 4' },
  ];

  const cityOptions = [
    { value: '', label: 'City' }, // Placeholder option
    { value: 'Ampang', label: 'Ampang' },
    { value: 'Petaling Jaya', label: 'Petaling Jaya' },
    { value: 'Puchong', label: 'Puchong' },
    { value: 'Kuala Lumpur', label: 'Kuala Lumpur' },
    { value: 'Shah Alam', label: 'Shah Alam' },
    { value: 'Subang Jaya', label: 'Subang Jaya' },
    { value: 'Klang', label: 'Klang' },
    { value: 'Cyberjaya', label: 'Cyberjaya' }
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const [callCardNo, setCallCardNo] = useState('');

  useEffect(() => {
    // Generate call card number when the component mounts
    const generatedCallCardNo = generateCallCardNo();
    setCallCardNo(generatedCallCardNo);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a random Call Card No.
    const generatedCallCardNo = generateCallCardNo();
    setCallCardNo(generatedCallCardNo); // Set the call card number state
    // Merge with form data
    const formDataWithId = { ...formData, callcardNo: generatedCallCardNo };
    // Call onFormSubmit and pass the form data
    onFormSubmit(formDataWithId);
    console.log(formDataWithId); // For demonstration
  };

  const generateCallCardNo = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomAlphabets = '';
    for (let i = 0; i < 3; i++) {
      randomAlphabets += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    return `${randomAlphabets}${randomNumber}`;
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="mb-3">
          <h4 className="mb-1">Call Card  {callCardNo}</h4>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xl={3} md={12} className="mb-3">
              <Form.Control as={FormSelect} defaultValue="Always" id="proximity" onChange={handleChange}>
                {proximityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={5} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Business Place / Location (Administrative Division)" id="fullName" onChange={handleChange} required />
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control as={FormSelect} defaultValue="Level" id="time" onChange={handleChange}>
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control as={FormSelect} placeholder="Province" id="province" onChange={handleChange}>
                {provinceOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col xl={1} md={12} className="mb-3">
              <Form.Control type="text" placeholder="St. No" id="streetNo" onChange={handleChange} required />
            </Col>
            <Col xl={4} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Street / Intersection" id="street" onChange={handleChange} required />
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Postal Code" id="postalCode" onChange={handleChange} required />
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control as={FormSelect} placeholder="Precint" id="precint" onChange={handleChange}>
                {precintOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={3} md={12} className="mb-3">
              <Form.Control as={FormSelect} placeholder="City" id="City" onChange={handleChange}>
                {cityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
          <Row>


          </Row>
          <Row>
            <Col xl={4} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Phone No" id="phoneNo" onChange={handleChange} required />
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Phone Extension" id="phextension" onChange={handleChange} />
            </Col>
            <Col xl={6} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Crossing Street" id="crossingStreet" onChange={handleChange} />
            </Col>
          </Row>
          <Row>
            <Col xl={4} md={12} className="mb-3">
              <Form.Control as={FormSelect} placeholder="Direction" id="direction" onChange={handleChange}>
                {directionOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={2} md={12} className="mb-3">
              <Form.Control as={FormSelect} placeholder="Risk Level" id="riskLevel" onChange={handleChange}>
                {risklevelOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={6} md={12} className="mb-3">
              <Form.Control type="text" placeholder="Property Usage" id="propertyUsage" onChange={handleChange} />
            </Col>
          </Row>
          <Row>
            <Col xl={8} md={12} className="mb-3">
              <Form.Control as={FormSelect} placeholder="Nature" id="nature" onChange={handleChange}>
                {natureCodeOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col xl={4} md={12} className="mb-3">
              <Form.Control as={FormSelect} placeholder="Priority" id="priority" onChange={handleChange}>
                {priorityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
          <hr className="my-2" />
          <div className="mb-3">
            <h4 className="mb-1">Caller</h4>
          </div>
          <Row className="mb-3">
            <Col sm={8} xs={12}>
              <Form.Control type="text" placeholder="Caller Name" id="name" onChange={handleChange} required />
            </Col>
            <Col md={4} xs={12}>
              <Form.Control type="text" placeholder="Enter Phone" id="phone" onChange={handleChange} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={3}>
              <Form.Control type="text" placeholder="St. No" id="streetNo" onChange={handleChange} />
            </Col>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Street / Intersection" id="intersection" onChange={handleChange} />
            </Col>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Apartment" id="apartment" onChange={handleChange} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={3}>
              <Form.Control as={FormSelect} placeholder="Precint" id="precint" onChange={handleChange}>
                {precintOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col sm={5}>
              <Form.Control as={FormSelect} placeholder="City" id="city" onChange={handleChange}>
                {cityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Col>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Postal Code" id="postalCode" onChange={handleChange} />
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
