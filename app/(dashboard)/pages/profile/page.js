'use client'

// import node module libraries
import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import {
  AboutMe,
  ActivityFeed,
  MyTeam,
  ProfileHeader,
  ProjectsContributions,
  RecentFromBlog
} from 'sub-components'

const Profile = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code will run only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder or null if window is not available
    return null;
  }

  return (
    <Container fluid className="p-6">

      {/* Profile Header  */}
      <ProfileHeader />

      {/* content */}
      <div className="py-6">
        <Row>
          <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
            {/* About Me */}
            <AboutMe />
          </Col>
          <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
            {/* My Team */}
            <MyTeam />
          </Col>
          {/* Recent From Blog 
          <RecentFromBlog /> */}

          <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
            <ProjectsContributions />

            {/* Activity Feed 
            <ActivityFeed /> */}

          </Col>
        </Row>
      </div>

    </Container>
  );
}

export default Profile;
