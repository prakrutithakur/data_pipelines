import React from 'react';
import styled from 'styled-components';
import { colorAccent, colorAccentHover } from '@/utils/palette';
import EmailAtIcon from 'mdi-react/AtIcon';
import { Form, Field } from 'react-final-form';
import { marginLeft } from '@/utils/directions';
import FormField from '@/shared/components/form/FormField';
import {
  FormGroup,
  FormGroupField,
  FormGroupLabel,
  FormGroupIcon,
} from '@/shared/components/form/FormElements';
import { signInValidate } from '@/utils/validate';
import PasswordField from '@/shared/components/form/Password';
import { AccountButton, AccountButtons, LoginForm } from '../AccountElements';

const SignInForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit} validate={signInValidate}>
      {({ handleSubmit, pristine }) => (
        <LoginForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormGroupLabel>Email</FormGroupLabel>
            <FormGroupField>
              <FormGroupIcon>
                <EmailAtIcon />
              </FormGroupIcon>
              <Field
                name="email"
                component={FormField}
                type="email"
                className="input-without-border-radius"
                placeholder="Enter email"
                required
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Password</FormGroupLabel>
            <FormGroupField>
              <Field
                name="password"
                component={PasswordField}
                type="password"
                className="input-without-border-radius"
                placeholder="Enter password"
                keyIcon
                required
              />
            </FormGroupField>
          </FormGroup>
          <ButtonContainer>
            <AccountButton type="submit" variant="primary" disabled={pristine}>
              Log In
            </AccountButton>
          </ButtonContainer>
        </LoginForm>
      )}
    </Form>
  );
};

export default SignInForm;

// region STYLES

const ButtonContainer = styled(AccountButtons)`
  ${marginLeft}: 0!important;
  margin-bottom: 20px;
  margin-top: 20px;
  button {
    margin-bottom: 0;
  }
`;

// endregion
