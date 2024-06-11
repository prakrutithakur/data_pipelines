import React from 'react';
import styled from 'styled-components';
import {
  AccountCard,
  AccountContent,
  AccountTitle,
  AccountWrap,
} from '@/shared/components/account/AccountElements';
import { logoImg } from '@/utils/palette';
import SignInForm from '@/shared/components/account/signIn/SignInForm';
import DotDotLoader from '@/shared/components/DotDotLoader';
import * as Setting from '@/shared/components/account/signIn/settings';

const SignIn = () => {
  const submitUserDetail = () => {
    Setting.CasdoorSDK.signin_redirect();
  };

  return (
    <AccountWrap>
      <AccountContent>
        <AccountCard>
          <AccountHeader>
            <LoginFormLogo />
            <LoadingContainer>
              {/* {loading || resetPwdReducerLoading || forgotPwdReducerLoading ? (
                <DotDotLoader
                  loadingState={loading || resetPwdReducerLoading || forgotPwdReducerLoading}
                />
              ) : (
                ''
              )} */}
            </LoadingContainer>
            <AccountTitle>Login</AccountTitle>
            <h4 className="subhead">Login to your account</h4>
          </AccountHeader>
          <SignInForm onSubmit={submitUserDetail} />
        </AccountCard>
      </AccountContent>
    </AccountWrap>
  );
};

export default SignIn;

const LoginFormLogo = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${logoImg};
  text-align: center;

  @media screen and (max-width: 356px) {
    margin: 5px 0;
  }
`;

const AccountHeader = styled.div`
  margin-bottom: 30px;
`;

const LoadingContainer = styled.div`
  height: 40px;
`;
