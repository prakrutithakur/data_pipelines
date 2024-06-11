import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Setting from '@/shared/components/account/signIn/settings';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      Setting.CasdoorSDK.exchangeForAccessToken().then((res) => {
        if (res.access_token) {
          localStorage.setItem('token', res.access_token);
          Setting.goToLink('/home');
        }
      });
    };

    handleAuthCallback();
  }, [navigate]);

  return <div>{'Loading...'}</div>;
};

export default AuthCallback;
