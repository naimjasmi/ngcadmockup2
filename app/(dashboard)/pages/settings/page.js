'use client'
import React from 'react';
import { Container } from 'react-bootstrap';
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences } from 'sub-components';

const Settings = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Container fluid className="p-6">
      <GeneralSetting />
      <DeleteAccount />
    </Container>
  );
};

export default Settings;
