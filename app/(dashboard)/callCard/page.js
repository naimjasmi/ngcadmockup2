'use client'
// Import necessary modules
import React, { useState } from 'react';
import { Col, Row, Container, Card, Button, Modal } from 'react-bootstrap';
import { CallerDetail, Geolocation, Comment, Resource, AllIncident } from 'sub-components';
import Maps from '../pages/maps/page';

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
        <Col xl={2} lg={6} md={6} xs={12}>
          <Comment />
        </Col>
        <Col xl={6} lg={6} md={6} xs={12}>
          <CallerDetail />
        </Col>
        <Col xl={4} lg={12} md={12} xs={12}>
        <Resource />
          {/*<Card>
            <Card.Body>
              <Geolocation />
              <Button className="mt-2" variant="outline-secondary" onClick={toggleModal}>Open Map</Button>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
      <Row className="justify-content-center">
      <Col xl={12} lg={12} md={12} xs={12}>
          <AllIncident/>
        </Col>
      </Row>

      {/* Geolocation modal 
      <Modal show={showModal} onHide={toggleModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Geolocation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Maps />
        </Modal.Body>
      </Modal> */}

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

