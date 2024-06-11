import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import * as Setting from '@/shared/components/account/signIn/settings';
import FirstConnect from './components/FirstConnect';
import SecondConnect from './components/SecondConnect';
import ThirdConnect from './components/ThirdConnect';
import Connector from './components/Connector';
import FourthConnect from './components/FourthConnect';
import FifthConnect from './components/FifthConnect';
import SixthConnect from './components/SixthConnect';
import HorizontalConnector from './components/HorizontalConnector';
import Plus from './components/Plus';
import { showFormPanel } from '../../../redux/actions/FormTypeActions/formType';
import createUser from '../../../redux/actions/FormTypeActions/createUser';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { panelState } = useSelector((state) => state.formTypeReducer);

  const [statusColor, setStatusColor] = useState('#cccccc');

  useEffect(() => {
    // if (Setting.isLoggedIn()) {
    //   Setting.getUserinfo().then((res) => {
    //     if (res) {
    //       localStorage.setItem('userInfo', JSON.stringify(res));
    //     }
    //   });
    // }
    //TODO: add signup api logic
    const userRegistered = localStorage.getItem('userRegistered');
    if (!userRegistered) {
      dispatch(createUser());
    }
    dispatch(showFormPanel({ formType: 1, showForm: false, moduleId: 1, tab: 1 }));
  }, []);

  const handleModuleClick = (e) => {
    dispatch(showFormPanel({ formType: 1, showForm: true, moduleId: 1, tab: 1 }));
  }; //dispatch some event

  const getLocalStatus = localStorage.getItem('status');

  const handleStatus = () => {
    setStatusColor('#61A05E');
  };

  useEffect(() => {
    if (getLocalStatus) {
      handleStatus();
    }
  }, [panelState]);

  const handleDashboardLink = () => {
    if (getLocalStatus) {
      navigate('/dashboard');
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div
            style={{
              height: '80vh',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              overflow: 'auto',
            }}
          >
            <div id="first" onClick={(e) => handleModuleClick(e)} style={{ cursor: 'pointer' }}>
              <FirstConnect />
            </div>

            <div id="second">
              <SecondConnect status={statusColor} />
            </div>
            <div id="third" style={{ height: '255px', paddingRight: '10px', paddingLeft: '10px' }}>
              <ThirdConnect status={statusColor} />
            </div>
            <div id="connectortwo" style={{ paddingTop: '10px' }}>
              <Connector />
            </div>
            <div
              id="fourth"
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                paddingTop: '10px',
                maxHeight: '120px',
                maxWidth: '185px',
              }}
            >
              <FourthConnect status={statusColor} />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div id="horizontal-connect" style={{ paddingTop: '10px' }}>
                  <HorizontalConnector />
                </div>
                <div
                  id="fifth"
                  onClick={(e) => handleDashboardLink(e)}
                  style={{ paddingTop: '10px', cursor: 'pointer' }}
                >
                  <FifthConnect />
                </div>
              </div>
            </div>
            <div id="plus" style={{ paddingTop: '10px', paddingRight: '10px' }}>
              <Plus />
            </div>
            <div id="sixth" style={{ paddingTop: '10px' }}>
              <SixthConnect />
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
              nodes={nodes}
              // edges={edges}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              // onEdgesChange={onEdgesChange}
              // onConnect={onConnect}
              draggable={false}
            />
          </div>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Home;
