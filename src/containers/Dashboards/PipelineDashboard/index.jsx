import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { Card, CardBody, CardTitleWrap, CardTitle } from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import renderSelectField from '@/shared/components/form/Select';
import { Table } from '@/shared/components/TableElements';
import { Nav, Tab } from 'react-bootstrap';
import { TabsWrap, NavLink, NavItem, BorderedBottomTabs } from '@/shared/components/Tabs';
import NatsComponent from './components/NatsComponent';
import ChartContainer from './components/ChartContainer';

const PipeLineDashboard = () => {
  const [messages, setMessage] = useState([]);
  const [rawMessages, setRawMessages] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [chartType, setChartType] = useState('');
  const [chartKeys, setChartKeys] = useState([]);

  const tableHeaders = messages.length > 0 ? Object.keys(messages[0]) : [];
  const selectOptions =
    messages.length > 0
      ? Object.keys(messages[0]).map((item) => ({
          id: item,
          value: item,
          label: item,
        }))
      : [];

  const chartOptions = [
    {
      id: 'Line',
      value: 'line_chart',
      label: 'Line Chart',
    },
    {
      id: 'Bar',
      value: 'bar_chart',
      label: 'Bar Chart',
    },
  ];

  const handleChart = (values) => {
    if (Object.keys(values)) {
    }
  };

  const handleChartKeys = (e) => {
    if (e) {
      setChartKeys(Object.values(e).map((item) => item.value));
    }
  };

  const handleChartType = (e) => {
    if (e) {
      if (e.value) {
        setChartType(e.value);
      }
    }
    if (!e) {
      setChartType('');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitleWrap>
                <CardTitle>Device Data</CardTitle>
              </CardTitleWrap>
              <BorderedBottomTabs>
                <Tab.Container defaultActiveKey={1}>
                  <TabsWrap>
                    <Nav className="nav-tabs">
                      <NavItem>
                        <NavLink eventKey="1">Decoded Data</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink eventKey="2">Raw Data</NavLink>
                      </NavItem>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="1">
                        <NatsComponent
                          setMessage={setMessage}
                          setHeaders={setHeaders}
                          setRawMessages={setRawMessages}
                        />
                        <Table responsive hover>
                          <thead style={{ border: '1px solid #eff1f5' }}>
                            <tr>
                              {tableHeaders.map((header) => (
                                <th key={header}>{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {messages.map((message, index) => (
                              <tr key={index}>
                                {Object.values(message).map((value, idx) => (
                                  <td key={idx}>{value}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2">
                        <ul style={{ listStyle: 'none' }}>
                          {rawMessages?.map((value, index) => (
                            <li key={index}>{value}</li>
                          ))}
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </TabsWrap>
                </Tab.Container>
              </BorderedBottomTabs>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <Card>
            <CardBody>
              <Form onSubmit={handleChart}>
                {({ handleSubmit }) => (
                  <FormContainer onSubmit={handleSubmit} autoComplete="off">
                    <FormGroup>
                      <FormGroupLabel>Select keys to plot a chart</FormGroupLabel>
                      <FormGroupField>
                        <Field
                          name="keys"
                          component={renderSelectField}
                          type="text"
                          placeholder="Please select connection type"
                          options={selectOptions}
                          isMulti
                          parse={(e) => {
                            handleChartKeys(e);
                            return e;
                          }}
                        />
                      </FormGroupField>
                    </FormGroup>
                    <FormGroup>
                      <FormGroupLabel>Select chart Type</FormGroupLabel>
                      <FormGroupField>
                        <Field
                          name="chart_type"
                          component={renderSelectField}
                          type="text"
                          placeholder="Please select chart type"
                          options={chartOptions}
                          parse={(e) => {
                            handleChartType(e);
                            return e;
                          }}
                        />
                      </FormGroupField>
                    </FormGroup>
                  </FormContainer>
                )}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChartContainer charttype={chartType} messages={messages} chartkeys={chartKeys} />
        </Col>
      </Row>
    </Container>
  );
};

export default PipeLineDashboard;
