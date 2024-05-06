import { Col, Row } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const Geolocation = () => {

  return (
    <Row className="mb-0">
      <div>
        <div className="mb-6">
          <h4 className="mb-1">Geolocation</h4>
        </div>
        <Row className="mb-3">
          <Col sm={12} className="mb-3 mb-lg-0">
            <MapContainer center={[2.9264, 101.6964]} zoom={14} style={{ height: "720px" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker icon={
                new L.Icon({
                  iconUrl: MarkerIcon.src,
                  iconRetinaUrl: MarkerIcon.src,
                  iconSize: [25, 41],
                  iconAnchor: [12.5, 41],
                  popupAnchor: [0, -41],
                  shadowUrl: MarkerShadow.src,
                  shadowSize: [41, 41],
                })
              } position={[2.9264, 101.6964]}>
                <Popup>
                  This is your location: <br />
                  Latitude: {2.9264}, Longitude: {101.6964}
                </Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
      </div>
    </Row>
  )
}

export default Geolocation