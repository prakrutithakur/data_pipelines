import React from 'react';
import { Form } from 'react-final-form';
import { FormContainer } from '@/shared/components/form/FormElements';
import { AccountButton } from '@/shared/components/account/AccountElements';
import * as Setting from '@/shared/components/account/signIn/settings';

const LockScreenForm = () => {
  const handleSubmit = () => {
    Setting.CasdoorSDK.signin_redirect();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <FormContainer onSubmit={handleSubmit}>
          <AccountButton type="submit" variant="primary">
            Log In/Sign Up
          </AccountButton>
        </FormContainer>
      )}
    </Form>
  );
};
export default LockScreenForm;
