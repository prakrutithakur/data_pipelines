import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
} from '@/shared/components/form/FormElements';
import { AccountButton } from '../AccountElements';

const ForgotPasswordForm = ({ onSubmit, setShowForm }) => {
  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, pristine, submitting }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <FormGroupField>
              <FormGroupIcon>
                <AlternateEmailIcon />
              </FormGroupIcon>
              <Field
                name="email"
                id="email"
                component="input"
                type="email"
                placeholder="Enter email"
                className="input-without-border-radius"
              />
            </FormGroupField>
          </FormGroup>
          <AccountButton variant="secondary" onClick={() => handleCancel()}>
            Back
          </AccountButton>
          <AccountButton variant="primary" type="submit" disabled={pristine || submitting}>
            Reset Password
          </AccountButton>
        </FormContainer>
      )}
    </Form>
  );
};

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ForgotPasswordForm;
