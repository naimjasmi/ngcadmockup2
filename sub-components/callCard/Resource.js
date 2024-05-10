// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image, Form } from 'react-bootstrap';
import { FormSelect } from 'widgets';

// import required data files
import ResourceData from "data/resource/ResourceData";

const Resource = () => {
    const proximityOptions = [
        { value: 'All Resources', label: 'All Resources' },
        { value: 'All Ambulance Resources', label: 'All Ambulance Resources' },
        { value: 'All Fire Resources', label: 'All Fire Resources' },
        { value: 'All Police Resources', label: 'All Police Resources' }
    ];
    return (
        <Row>
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white py-4">
                        <Row>
                            <Col xl={8} lg={8} md={8} xs={4}>
                                <div className="ms-lg-3 d-none d-md-none d-lg-block">
                                    {/* Select Resource */}
                                    <Form.Control as={FormSelect} defaultselected="Always" id="proximity" options={proximityOptions} />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={4} xs={4}>
                                <div className="ms-lg-3 d-none d-md-none d-lg-block">
                                    {/* Search Form */}
                                    <Form className="d-flex align-items-center">
                                        <Form.Control type="search" placeholder="Search" />
                                    </Form>
                                </div>
                            </Col>
                        </Row>

                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Service</th>
                                <th>Res.</th>
                                <th>Status</th>
                                <th>Last Status Time</th>
                                <th>Assigned Unit</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ResourceData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <div className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}>
                                                <Image src={item.brandLogo} alt="" />
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            <h5 className=" mb-1">
                                                <Link href="#" className="text-inherit">{item.resName }</Link>
                                            </h5>
                                        </td>
                                        <td className="align-middle"><span className={`badge bg-${item.priorityBadgeBg}`}>{item.priority}</span></td>
                                        <td className="align-middle">{item.datime}</td>
                                        <td className="align-middle">
                                            <div className="avatar-group">
                                                {item.members.map((avatar, avatarIndex) => {
                                                    return (
                                                        <span className="avatar avatar-sm" key={avatarIndex}>
                                                            <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                                                        </span>
                                                    )
                                                })}
                                                <span className="avatar avatar-sm avatar-primary">
                                                    <span className="avatar-initials rounded-circle fs-6">+1</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="align-middle text-dark">
                                            <div className="float-start me-3">{item.progress}%</div>
                                            <div className="mt-2">
                                                <ProgressBar now={item.progress} style={{ height: '5px' }} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All Resources</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default Resource