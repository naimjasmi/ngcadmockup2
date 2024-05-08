'use client'
// Import necessary modules
import React, { useState } from 'react'; 
import { Col, Row, Container, Card, Button, Modal } from 'react-bootstrap'; 
import { CallerDetail, Geolocation } from 'sub-components'; 

// Define CallCard component
const CallCard = () => {
  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false); 
  // Function to toggle modal visibility
  const toggleModal = () => setShowModal(!showModal); 

  return (
    <Container fluid className="px-6 py-4">
      {/* CallerDetail component */}
      <Row className="justify-content-center">
        <Col xl={7} lg={6} md={12} xs={12}>
          <CallerDetail />
        </Col>
        {/* Button to open modal */}
        <Col xl={5} lg={6} md={12} xs={12}>
          <Card>
            <Card.Body>
              <Geolocation />
              <Button className="mt-2" variant="outline-secondary" onClick={toggleModal}>Open Map</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Geolocation modal */}
      <Modal show={showModal} onHide={toggleModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Geolocation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Geolocation />
        </Modal.Body>
      </Modal>

      {/* Custom CSS for larger modal */}
      <style jsx global>{`
        .modal-xl {
          max-width: 80%; /* Adjust the width percentage as needed */
        }
      `}</style>

    </Container>
  )
}

export default CallCard; // Export CallCard component

