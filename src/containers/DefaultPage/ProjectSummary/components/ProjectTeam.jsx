import React from 'react';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import ProjectMember from './ProjectMember';

const Ava1 = `${process.env.PUBLIC_URL}/img/11.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/12.png`;
const Ava3 = `${process.env.PUBLIC_URL}/img/14.png`;

const data = [
  {
    id: 1,
    image: Ava1,
    assetType: 'Vehicles',
    link: '/select_vehicles',
    totalNumber: '50',
  },
  {
    id: 2,
    image: Ava2,
    assetType: 'HVACs',
    link: '/select_vehicles',
    totalNumber: '105',
  },
  {
    id: 3,
    image: Ava3,
    assetType: 'Gateways',
    link: '/select_vehicles',
    totalNumber: '40',
  },
];

const Summary = () => (
  <Col md={12} lg={12} sm={12}>
    <Card height="auto">
      <CardBody>
        <CardTitleWrap>
          <CardTitle>Asset Types</CardTitle>
        </CardTitleWrap>
        {data.map(({
          id,
          image,
          assetType,
          link,
          totalNumber,
        }) => (
          <ProjectMember
            key={id}
            img={image}
            assettype={assetType}
            link={link}
            // totalnumber={totalNumber + assetType}
            totalnumber={`${totalNumber}\u00A0${assetType}`}
          />
        ))}
      </CardBody>
    </Card>
  </Col>
);

export default Summary;
