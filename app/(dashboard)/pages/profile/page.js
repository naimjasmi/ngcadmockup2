'use client'
// import node module libraries
import React from 'react';
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
  // Wrap the component content with a check for window
  if (typeof window === 'undefined') {
    // Return a placeholder or null if window is not available
    return null;
  }

  // If window is available, render the component content
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
  )
}

export default Profile
