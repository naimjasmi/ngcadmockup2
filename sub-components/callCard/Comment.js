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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default behavior of the Enter key
            handleSendMessage(); // Call the sendMessage function
        }
    };

    return (
        <Col xl={12} lg={12} md={12} xs={12}>
            <Card style={{ height: '752px', overflowY: 'auto' }}> {/* Set a fixed height and enable vertical scrolling */}
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
                                <p className="mb-0">{message.text}</p>
                                <small className="text-muted">{message.time}</small>
                            </div>
                        ))}
                    </div>
                    <Row className="mt-3">
                        <Form.Group as={Row} className="mb-3 position-relative">
                            <Col md={12} xs={12} className="relative">
                                <Form.Control
                                    type="text"
                                    placeholder="Add Comment..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyPress={handleKeyPress} // Call handleKeyPress on key press
                                    className="w-full pr-12" // Added pr-12 to accommodate icon
                                />
                                <Button
                                    variant="success"
                                    className="position-absolute end-0 bottom-0 h-full px-3"
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
