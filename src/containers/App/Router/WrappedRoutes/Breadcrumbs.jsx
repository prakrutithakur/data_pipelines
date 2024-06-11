import React from 'react';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { colorText } from '@/utils/palette';

const Breadcrumbs = (props) => {
  const { history, crumbs } = props;

  {
    crumbs.length > 0 ? (
      <Breadcrumb.Item> Home </Breadcrumb.Item>
    ) : (
      <Breadcrumb.Item> Home </Breadcrumb.Item>
    );
  }

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8}>
          <BreadCrumbContainer>
            <Breadcrumb style={{ fontSize: '15px' }}>
              {crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                  <BreadcrumbActive active key={key}>
                    {name}
                  </BreadcrumbActive>
                ) : (
                  <Breadcrumb.Item key={key} onClick={() => history.push(path[0])}>
                    {name}
                  </Breadcrumb.Item>
                )
              )}
            </Breadcrumb>
          </BreadCrumbContainer>
        </Col>
      </Row>
    </Container>
  );
};
export default Breadcrumbs;

const BreadCrumbContainer = styled.div`
  @media (max-width: 767px) {
    margin-top: -40px;
    padding: 30px 0 40px 0;
  }
`;
export const BreadcrumbActive = styled(Breadcrumb.Item)`
  color: ${colorText} !important;
`;
