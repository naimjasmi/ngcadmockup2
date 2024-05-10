'use client'

import { useState } from 'react';
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import useMounted from 'hooks/useMounted';
import { FaEnvelope, FaLock } from 'react-icons/fa';

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
        <Card className="smooth-shadow-md p-4">
          <div className="text-center mb-4">
            <Link href="/">
              <Image src="/images/brand/logo/emergensyslogo.png" alt="Emergensys Logo" style={{ maxWidth: '150px' }} />
            </Link>
            <p className="mt-2 mb-4">Please enter your user information.</p>
          </div>
          {hasMounted &&
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="username" className="mb-3">
                <Form.Label><FaEnvelope className="me-2" />Username or Email</Form.Label>
                <Form.Control type="email" name="username" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="password" className="mb-3">
                <Form.Label><FaLock className="me-2" />Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="**************" required />
              </Form.Group>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" id="rememberme">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>Remember me</Form.Check.Label>
                </Form.Check>
                <Link href="/authentication/forget-password" className="text-inherit fs-6">Forgot your password?</Link>
              </div>
              <div className="d-grid mb-3">
                {loading ? (
                  <Button variant="primary" disabled>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading...
                  </Button>
                ) : (
                  <Button variant="primary" type="submit">Sign In</Button>
                )}
              </div>
            </Form>}
        </Card>
      </Col>
    </Row>
  );
};

export default SignIn;
