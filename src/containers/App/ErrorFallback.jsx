import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@/shared/components/Button';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  // const navigate = useNavigate();
  const handleReloadPage = () => {
    // navigate('/global');
    // window.location.reload();
  };

  return (
    <NotFoundContainer>
      <NotFountContent>
        <NotFoundInfo>
          Error!! <br />
          Ooops! Something went wrong. :(
          {error.message}
        </NotFoundInfo>
        <Button variant="primary" onClick={handleReloadPage}>
          Back Home
        </Button>
      </NotFountContent>
    </NotFoundContainer>
  );
};

export default ErrorFallback;

// region STYLES

const NotFoundContainer = styled.div`
  text-align: center;
  height: 60vh;
  overflow: auto;
  display: flex;
  background-size: cover;

  button {
    margin: 0;
  }
`;

const NotFountContent = styled.div`
  margin: auto;
  padding: 10px;
`;

const NotFoundImage = styled.img`
  max-width: 500px;
  width: 100%;
`;

const NotFoundInfo = styled.h3`
  margin-bottom: 20px;
  margin-top: 90px;
`;

// endregion
