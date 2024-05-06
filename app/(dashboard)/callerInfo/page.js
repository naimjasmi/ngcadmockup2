'use client'
// import node module libraries
import Link from 'next/link';
import { Col, Row, Container, Image } from 'react-bootstrap';
// import sub components
import {CallerDetail, DeleteAccount, EventCode } from 'sub-components'

const Callerinfo = () => {
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
        {/* codehere */}
        <CallerDetail />
      </Row>
    </Container>
  )
}

export default Callerinfo