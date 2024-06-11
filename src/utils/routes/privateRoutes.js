import React from 'react';
import { Navigate, Outlet, Route, Routes, redirect } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { colorBackgroundBody } from '@/utils/palette';
import { paddingLeft } from '@/utils/directions';
import NotFound404 from '../../containers/DefaultPage/404';
import Layout from '../../containers/Layout';
import ErrorFallback from '../../containers/App/ErrorFallback';

const PrivateRoute = ({ roles, children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Layout />
      <ContainerWrap>
        <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
      </ContainerWrap>
    </>
  );
};

export default PrivateRoute;

const ContainerWrap = styled.div`
  padding-top: 90px;
  min-height: 100vh;
  transition: padding-left 0.3s;

  // ${paddingLeft}: 0;

  background: ${colorBackgroundBody};

  @media screen and (min-width: 576px) {
    // ${paddingLeft}: 250px;
  }

  @media screen and (max-width: 576px) {
    // padding-top: 150px;
  }
`;
