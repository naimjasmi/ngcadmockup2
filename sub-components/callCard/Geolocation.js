import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const Geolocation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [markedMarkers, setMarkedMarkers] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleResultClick = (result) => {
    setSelectedLocation({
      lat: parseFloat(result.lat),
      lon: parseFloat(result.lon),
      name: result.display_name
    });
  };

  const handleMarkButtonClick = () => {
    // Add the selected location to markedMarkers
    if (selectedLocation) {
      setMarkedMarkers([...markedMarkers, selectedLocation]);
    }
  };

  const handleRemoveMarker = (index) => {
    // Remove the marker at the specified index
    const updatedMarkers = [...markedMarkers];
    updatedMarkers.splice(index, 1);
    setMarkedMarkers(updatedMarkers);
  };

  return (
    <Row className="mb-0">
      <div>
        <div className="mb-6">
          <h4 className="mb-1">Geolocation</h4>
        </div>
        <Row className="mb-3">
          <Col sm={12} className="mb-3 mb-lg-0">
            <Form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
              <Row>
                <Col xl={6} lg={6} md={6} xs={6}>
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
          <Col sm={12} className="mb-3 mb-lg-0">
            <MapContainer center={[2.9264, 101.6964]} zoom={14} style={{ height: "680px" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {markedMarkers.map((marker, index) => (
                <Marker
                  key={`marked-${index}`}
                  position={[marker.lat, marker.lon]}
                  icon={new L.Icon({
                    iconUrl: MarkerIcon.src,
                    iconRetinaUrl: MarkerIcon.src,
                    iconSize: [25, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                    shadowUrl: MarkerShadow.src,
                    shadowSize: [41, 41],
                  })}
                >
                  <Popup>
                    <div>
                      {marker.name}
                      <Button className='m-1' onClick={() => handleRemoveMarker(index)} size="sm">Remove</Button>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {searchResults.map(result => (
                <Marker
                  key={result.place_id}
                  position={[parseFloat(result.lat), parseFloat(result.lon)]}
                  eventHandlers={{
                    click: () => handleResultClick(result)
                  }}
                  icon={new L.Icon({
                    iconUrl: MarkerIcon.src,
                    iconRetinaUrl: MarkerIcon.src,
                    iconSize: [25, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                    shadowUrl: MarkerShadow.src,
                    shadowSize: [41, 41],
                  })}
                >
                  <Popup>
                    <div>
                      {result.display_name}
                      <Button className='m-2' onClick={handleMarkButtonClick} size="sm">Mark</Button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Geolocation;
