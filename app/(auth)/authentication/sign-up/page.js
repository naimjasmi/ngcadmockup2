'use client'

import { useState } from 'react';
import { Row, Col, Card, Form, Button, Image, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import useMounted from 'hooks/useMounted';
import { FormSelect } from 'widgets';

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const roleOptions = [
    { value: 'Police Department 1', label: 'Police Department 1' },
    { value: 'One', label: 'Police Department 2' },
    { value: 'Two', label: 'Hospital 1' },
    { value: 'Three', label: 'Fire Station 1' },
    { value: 'four', label: 'Fire Station 2' }
  ];

  const hasMounted = useMounted();

  function handleLogin(ev) {
    ev.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/callCard');
    }, 2000);
  }

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        <Card className="smooth-shadow-md">
          <Card.Body className="p-6">
            <div className="text-center mb-4">
              <Link href="/">
                <Image src="/images/brand/logo/emergensyslogo.png" className="mb-2" alt="" style={{ maxWidth: '150px' }} />
              </Link>
              <p className="mb-4">Please select your role.</p>
            </div>
            {hasMounted && 
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="role">
                  <Form.Control as={FormSelect} placeholder="Role" id="role" options={roleOptions} />
                </Form.Group>

                <div>
                  <div className="d-grid mb-3">
                    <Button variant="primary" type="submit" disabled={loading}>
                      {loading ? <Spinner animation="border" size="sm" role="status" aria-hidden="true" /> : 'Sign In'}
                    </Button>
                  </div>
                  <div className="d-md-flex justify-content-center">
                    <Link href="/authentication/forget-password" className="text-inherit fs-5">Forgot your password?</Link>
                  </div>
                </div>
              </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUp;

