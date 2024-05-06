// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect, DropFiles } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import { EventCode } from 'sub-components'

const Geolocation = () => {

  return (
    <Row className="mb-8">
      <div>
        <div className="mb-6">
          <h4 className="mb-1">Geolocation</h4>
        </div>
        <Row className="mb-3">

          <Col sm={12} className="mb-3 mb-lg-0">
            {/* add the map here*/}
          </Col>
        </Row>
      </div>
    </Row>
  )
}

export default Geolocation