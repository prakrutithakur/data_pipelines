import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import LockIcon from 'mdi-react/LockIcon';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import FormField from '@/shared/components/form/FormField';
import { AccountButton } from '../AccountElements';
import { resetPwdValidate } from '../../../../utils/validate';

const ResetPasswordForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit} validate={resetPwdValidate}>
      {({ handleSubmit, pristine, submitting }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <FormGroupLabel>Enter New Password</FormGroupLabel>
            <FormGroupField>
              <FormGroupIcon>
                <LockIcon />
              </FormGroupIcon>
              <Field
                name="new_password"
                component={FormField}
                type="password"
                placeholder="Enter New Password"
                className="input-without-border-radius"
                required
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Confirm New Password</FormGroupLabel>
            <FormGroupField>
              <FormGroupIcon>
                <LockIcon />
              </FormGroupIcon>
              <Field
                name="new_password_confirm"
                component={FormField}
                type="password"
                placeholder="Confirm New Password"
                className="input-without-border-radius"
                required
              />
            </FormGroupField>
          </FormGroup>
          <AccountButton variant="primary" type="submit" disabled={pristine || submitting}>
            Reset Password
          </AccountButton>
        </FormContainer>
      )}
    </Form>
  );
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ResetPasswordForm;
