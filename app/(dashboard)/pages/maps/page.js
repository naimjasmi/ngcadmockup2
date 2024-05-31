'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Dummy incidents data
const dummyIncidents = [
  {
    callcardNo: 'ABC123',
    nature: 'Fire',
    streetNo: '123',
    level: 'Level 1',
    street: 'Main Street',
    precint: 'Precint2',
    postalCode: '12345',
    City: 'Ampang',
    province: 'Kuala Lumpur',
    direction: 'North',
    riskLevel: 'High',
    priority: 'Very High',
    name: 'Halimah Ja',
    phoneNo: '123-456-7890',
    resource: 'PO 245',
    lat: 2.9213,
    lon: 101.7244,
  },
  {
    callcardNo: 'DEF456',
    nature: 'Robbery',
    streetNo: '456',
    level: 'Level 2',
    street: 'First Avenue',
    precint: 'Precint3',
    postalCode: '54321',
    City: 'Petaling Jaya',
    province: 'Selangor',
    direction: 'South',
    riskLevel: 'Moderate',
    priority: 'High',
    name: 'Safick Salleh',
    phoneNo: '987-654-3210',
    resource: 'MEDIC 405',
    lat: 3.0851,
    lon: 101.5931,
  },
  {
    callcardNo: 'GHI789',
    nature: 'Assault',
    streetNo: '789',
    level: 'Level 3',
    street: 'Second Street',
    precint: 'Precint4',
    postalCode: '67890',
    City: 'Puchong',
    province: 'Selangor',
    direction: 'East',
    riskLevel: 'Low',
    priority: 'Medium',
    name: 'Dwayne Pebble',
    phoneNo: '111-222-3333',
    resource: 'FI 303',
    lat: 2.9986,
    lon: 101.5921,
  },
  {
    callcardNo: 'JKL012',
    nature: 'Traffic Accident',
    streetNo: '012',
    level: 'Level 4',
    street: 'Third Avenue',
    precint: 'Precint5',
    postalCode: '09876',
    City: 'Kuala Lumpur',
    province: 'Kuala Lumpur',
    direction: 'West',
    riskLevel: 'Very High',
    priority: 'Very High',
    name: 'Raju Kumar Kamir',
    phoneNo: '444-555-6666',
    resource: 'PO 757',
    lat: 3.1390,
    lon: 101.6869,
  }
];

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const Maps = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [markedMarkers, setMarkedMarkers] = useState(dummyIncidents.map(incident => ({
    lat: incident.lat,
    lon: incident.lon,
    name: `${incident.nature} - ${incident.City}`,
    isDraggingEnabled: false,
    details: `Nature: ${incident.nature}, Risk Level: ${incident.riskLevel}, Priority: ${incident.priority}`,
  })));
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching location:', error);
    }
  };

  const handleMarkButtonClick = (result) => {
    if (!result) return;

    const newMarker = {
      lat: parseFloat(result.lat),
      lon: parseFloat(result.lon),
      name: result.display_name,
      isDraggingEnabled: true,
      details: result.display_name,
    };
    setMarkedMarkers([...markedMarkers, newMarker]);
  };

  const handleRemoveMarker = (index) => {
    const updatedMarkers = [...markedMarkers];
    updatedMarkers.splice(index, 1);
    setMarkedMarkers(updatedMarkers);
  };

  const handleMarkerDragEnd = async (e, index) => {
    const updatedMarkers = [...markedMarkers];
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${e.target._latlng.lat}&lon=${e.target._latlng.lng}&format=json`);
      const data = await response.json();
      if (data && data.display_name) {
        updatedMarkers[index] = {
          lat: e.target._latlng.lat,
          lon: e.target._latlng.lng,
          name: data.display_name,
          isDraggingEnabled: updatedMarkers[index].isDraggingEnabled,
          details: data.display_name,
        };
        setMarkedMarkers(updatedMarkers);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  const toggleDragging = (index) => {
    const updatedMarkers = [...markedMarkers];
    updatedMarkers[index] = {
      ...updatedMarkers[index],
      isDraggingEnabled: !updatedMarkers[index].isDraggingEnabled,
    };
    setMarkedMarkers(updatedMarkers);
  };

  if (!isClient) {
    return null;
  }

  const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
    shadowSize: [41, 41],
  });

  return (
    <Container fluid>
      <Row className="mb-3 mt-3">
        <Col>
          <Form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <Row>
              <Col xl={8} lg={8} md={8} xs={4}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Search for a location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xl={4} lg={4} md={4} xs={4}>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ width: '100%', height: 'calc(90vh - 80px)' }}>
            <MapContainer center={[2.9264, 101.6964]} zoom={14} style={{ height: "100%" }} whenCreated={mapInstance => { mapRef.current = mapInstance }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {markedMarkers.map((marker, index) => (
                <Marker
                  key={`marked-${index}`}
                  position={[marker.lat, marker.lon]}
                  draggable={marker.isDraggingEnabled}
                  icon={defaultIcon}
                  eventHandlers={{ dragend: (e) => handleMarkerDragEnd(e, index) }}
                >
                  <Popup>
                    <div>
                      {marker.name}<br/>
                      {marker.details}<br/>
                      <Button className='m-2' onClick={() => handleRemoveMarker(index)} size="sm">Remove</Button>
                      <Button className='m-2' onClick={() => toggleDragging(index)} size="sm">
                        {marker.isDraggingEnabled ? 'Lock' : 'Unlock'}
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {searchResults.map(result => (
                <Marker
                  key={result.place_id}
                  position={[parseFloat(result.lat), parseFloat(result.lon)]}
                  eventHandlers={{ click: () => handleMarkButtonClick(result) }}
                  icon={defaultIcon}
                >
                  <Popup>
                    <div>
                      {result.display_name}
                      <Button className='m-2' onClick={() => handleMarkButtonClick(result)} size="sm">Mark</Button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Maps;
