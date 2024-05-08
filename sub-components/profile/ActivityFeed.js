// import node module libraries
import { Row, Col, Card, Image } from 'react-bootstrap';

const ActivityFeed = () => {
    return (
        <Row>
            <Col xs={12}>
                {/* card */}
                <Card>
                    {/* card body */}
                    <Card.Body>
                        {/* card title */}
                        <Card.Title as="h4">Activity Feed</Card.Title>
                        
                        <div className="d-flex mb-5">
                            <div>
                                <Image src="/images/avatar/avatardefault.png" className="rounded-circle avatar-md" alt="" />
                            </div>
                            <div className="ms-3 ">
                                <h5 className="mb-1">Muazfar Anwar</h5>
                                <p className="text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                                </p>
                                <p className="fs-5 mb-0">2m ago</p>
                            </div>
                        </div>
                        <div className="d-flex mb-5">
                            <div>
                                <Image src="/images/avatar/avatardefault.png" className="rounded-circle avatar-md" alt="" />
                            </div>
                            <div className="ms-3 ">
                                <h5 className="mb-1">Syukor Adan</h5>
                                <p className="text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                                </p>
                                <p className="fs-5 mb-0">1hour ago</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <Image src="/images/avatar/avatardefault.png" className="rounded-circle avatar-md" alt="" />
                            </div>
                            <div className="ms-3 ">
                                <h5 className="mb-1">Insyirah Dina</h5>
                                <p className="text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                                </p>
                                <p className="mb-0 fs-5 text-muted">2month ago</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ActivityFeed