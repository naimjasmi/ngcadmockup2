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

    const handleDispatch = (item) => {
        // Dispatch action or perform any other action for the specific item
        console.log("Dispatch action for:", item);
    };

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
                                <th>Action</th>
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
                                            {item.priority === "Available" ? (
                                                <button className="btn btn-sm btn-primary" onClick={() => handleDispatch(item)}>Dispatch</button>
                                            ) : (
                                                <button className="btn btn-sm btn-secondary" disabled>Dispatch</button>
                                            )}
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

export default Resource;
