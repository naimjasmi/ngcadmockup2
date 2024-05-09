'use client'

import { useState } from 'react';
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import useMounted from 'hooks/useMounted';

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const hasMounted = useMounted();

  function handleLogin(ev) {
    ev.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/authentication/sign-up');
    }, 2000);
  }

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        <Card className="smooth-shadow-md">
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/"><Image src="/images/brand/logo/emergensyslogo.png" className="mb-2" alt="" style={{ maxWidth: '150px' }} /></Link>
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {hasMounted &&
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control type="email" name="username" placeholder="Enter address here" required="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="**************" required="" />
                </Form.Group>
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>
                </div>
                <div className="d-grid">
                  {loading ? (
                    <Button variant="primary" disabled>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Loading...
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit">Sign In</Button>
                  )}
                </div>
                <div className="d-md-flex justify-content-center mt-4">
                  <div>
                    <Link href="/authentication/forget-password" className="text-inherit fs-5">Forgot your password?</Link>
                  </div>
                </div>
              </Form>}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignIn;
