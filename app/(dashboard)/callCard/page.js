'use client'
// import node module libraries
import Link from 'next/link';
import { Col, Row, Container, Card, Image } from 'react-bootstrap';
// import sub components
import { CallerDetail, EventCode, Geolocation } from 'sub-components'

const CallCard = () => {
  return (
    <Container fluid className="px-6 py-4">
      {/*<Row>
        <Col xl={12} lg={12} md={12} sm={12}>
          <div className="text-center mb-7">
            <h1 className="display-4">Caller Info</h1>
            <p>input critical information for efficient emergency handling.</p>
          </div>
        </Col>
      </Row> */}
      <Row className="justify-content-center">
        <Col xl={6} lg={6} md={12} xs={12}>
          <CallerDetail />
        </Col>
        <Col xl={6} lg={6} md={12} xs={12}>
          <Card>
            <Card.Body>
              <Geolocation />
            </Card.Body>
          </Card>
          {/* <br/>
          <Card>
            <Card.Body>
              <Geolocation />
            </Card.Body>
          </Card>*/}
        </Col> 
      </Row>
    </Container>
  )
}

export default CallCard