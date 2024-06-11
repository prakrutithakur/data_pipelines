import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import DeleteIcon from "mdi-react/DeleteIcon";
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
} from "@/shared/components/Card";
import { showFormPanel } from "@/redux/actions/FormTypeActions/formType";
import Chat from "./components/Chat";
import Plot from "react-plotly.js";

const DnDDashboard = () => {
  const dispatch = useDispatch();
  const [dropData, setDropData] = useState([]);
  const [createJson, setCreateJson] = useState([]);

  useEffect(() => {
    dispatch(
      showFormPanel({ formType: 2, showForm: false, moduleId: 2, tab: 1 })
    );
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("item");
    setDropData((prev) => [...prev, JSON.parse(item)]);
    setCreateJson((prev) => [...prev, JSON.parse(item)]);
    console.log("first", dropData);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  console.log("first", createJson);

  return (
    <Container>
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <CardBody>
              <CardTitle>Dnd Dashdboard</CardTitle>
              <Row
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                  border: "1px solid black",
                  minHeight: "70vh",
                  overflow: "auto",
                }}
              >
                {dropData.map((item, index) =>
                  item?.data ? (
                    <Col xs={12} md={6} style={{ border: "2px solid black" }}>
                      <PlotContainer>
                        <DeleteIconStyled>
                          <DeleteIcon
                            onClick={() => {
                              console.log("here", dropData);
                              dropData.pop();
                              console.log("dropdata", dropData);
                            }}
                          />
                        </DeleteIconStyled>
                        <Plot
                          data={item.data}
                          layout={item.layout}
                          key={index}
                          // style={{ overflow: 'auto', maxWidth: '400px' }}
                        />
                      </PlotContainer>
                    </Col>
                  ) : (
                    <Col xs={12} md={4}>
                      No Data
                    </Col>
                  )
                )}
              </Row>
            </CardBody>
          </Card>
        </Col>
        {/* <Col lg={4} md={4}>
          <Card>
            <CardBody>
              <CardTitleWrap>Ask a question</CardTitleWrap>
              <Chat />
            </CardBody>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default DnDDashboard;

const PlotContainer = styled.div`
  position: relative;
`;

const DeleteIconStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1000; /* Ensure the icon is above the plot */
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Optional: to make icon stand out */
  padding: 5px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(
      255,
      0,
      0,
      0.8
    ); /* Optional: change color on hover */
  }
`;
