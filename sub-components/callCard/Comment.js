import { useState } from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs'; // Import the send icon

const Comment = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        const currentTime = new Date().toLocaleString(); // Get current time
        setMessages([...messages, { text: newMessage, sender: 'user', time: currentTime }]);
        setNewMessage('');
    };

    const formatMessageText = (text) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };

    return (
        <Col xl={12} lg={12} md={12} xs={12}>
            <Card style={{ height: '632px', overflowY: 'auto' }}> {/* Set a fixed height and enable vertical scrolling */}
                <Card.Body>
                    <div className="mb-3">
                        <h4 className="mb-1">Comment</h4>
                    </div>
                    <div>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-[70%] ${
                                    message.sender === 'user' ? 'bg-green-200 self-end' : 'bg-gray-200 self-start'
                                }`}
                            >
                                <p className="mb-0">
                                    {formatMessageText(message.text)}
                                </p>
                                <small className="text-muted">{message.time}</small>
                            </div>
                        ))}
                    </div>
                    <Row className="mt-3">
                        <Form.Group as={Row} className="mb-3 position-relative">
                            <Col md={10} xs={10} className="relative d-flex"> {/* Increase the width to 10 columns */}
                                <Form.Control
                                    as="textarea" // Changed to textarea
                                    rows={3} // Set the initial number of rows
                                    placeholder="Add Comment..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="flex-grow-1" // Use flex-grow to make it take available space
                                />
                            </Col>
                            <Col md={2} xs={2} className="d-flex align-items-end"> {/* Set the button width to 2 columns */}
                                <Button
                                    variant="success"
                                    className="w-120" // Make the button take full width of the column
                                    onClick={handleSendMessage}
                                >
                                    <BsArrowRight />
                                </Button>
                            </Col>
                        </Form.Group>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Comment;
