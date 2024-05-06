// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect, DropFiles } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import { EventCode } from 'sub-components'

const CallerDetail = () => {
  const hasMounted = useMounted();
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

  return (
    <Row className="mb-8">
      <Col xl={7} lg={7} md={12} xs={12}>
        <EventCode />
      </Col>
      <Col xl={5} lg={5} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
            {/* col */}
            <div>
              <div className="mb-6">
                <h4 className="mb-1">Caller</h4>
              </div>
              {hasMounted &&
                <Form>
                  <Row className="mb-3">

                    <Col sm={12} className="mb-3 mb-lg-0">
                      <Form.Control type="text" placeholder="Caller Name" id="name" required />
                    </Col>
                  </Row>
                  {/* row */}
                  <Row className="mb-3">
                    <Col sm={3}>
                      <Form.Control type="text" placeholder="St. No" id="streetNo" required />
                    </Col>
                    <Col sm={5}>
                      <Form.Control type="text" placeholder="Street / Intersection" id="intersection" required />
                    </Col>
                    <Col sm={4}>
                      <Form.Control type="text" placeholder="Apartment" id="apartment" required />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={3}>
                      <Form.Control as={FormSelect} placeholder="Precint" id="precint" options={precintOptions} />
                    </Col>
                    <Col sm={5}>
                      <Form.Control as={FormSelect} placeholder="City" id="city" options={cityOptions} />
                    </Col>
                    <Col sm={4}>
                      <Form.Control type="text" placeholder="Postal Code" id="postalCode" required />
                    </Col>
                  </Row>
                  {/* row */}
                  <Row className="mb-3">
                    <Col md={12} xs={12}>
                      <Form.Control type="text" placeholder="Enter Phone" id="phone" />
                    </Col>
                  </Row>

                  <Row className="align-items-center">
                    <Col xl={3} md={12}>
                      <Button variant="primary" type="submit">Create</Button>
                    </Col>

                  </Row>
                </Form>
              }
            </div>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  )
}

export default CallerDetail