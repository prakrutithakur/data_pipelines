import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ManageAssetsData from '../ManageAssets/components/ManageAssetsData';

const AppDashboard = () => {
  return (
    <Container className="dashboard">
      <Row className="pb-4">
        <Col md={6}>
          <h3 className="page-title">Manage Assets</h3>
          <h6>Add or edit assets</h6>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={6}>
          <ManageAssetsData />
        </Col>
      </Row>
    </Container>
  );
};

export default AppDashboard;
