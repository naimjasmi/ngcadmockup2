'use client'
import React from 'react';
import { Container } from 'react-bootstrap';
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences } from 'sub-components';

const Settings = () => {
  // Ensure this component is only rendered on the client-side
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Container fluid className="p-6">
      {/* General Settings */}
      <GeneralSetting />

      {/* Email Settings */}
      {/* // DONE ... <EmailSetting /> */}

      {/* Settings for Preferences */}
      {/* // DONE ...<Preferences /> */}

      {/* Settings for Notifications */}
      {/* <Notifications /> */}

      {/* Delete Your Account */}
      <DeleteAccount />
    </Container>
  );
}

export default Settings;
