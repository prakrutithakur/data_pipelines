import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import DeleteIcon from "mdi-react/TrashCanIcon";
import SaveIcon from "mdi-react/ContentSaveIcon";
import UploadIcon from "mdi-react/UploadIcon";
import {
  Card,
  CardBody,
  // CardTitleWrap,
  CardTitle,
} from "@/shared/components/Card";
import { showFormPanel } from "@/redux/actions/FormTypeActions/formType";
// import Chat from "./components/Chat";
import Plot from "react-plotly.js";
import KpiCard from "./components/KPICard";
import { Button } from "@/shared/components/Button";

const DnDDashboard = () => {
  const dispatch = useDispatch();
  const initialData = JSON.parse(localStorage.getItem("dashboardData"));
  const [dropData, setDropData] = useState(initialData);
  const [savedColData, setSavedColData] = useState(initialData);
  const colRef = useRef(null);
  const colRightRef = useRef(null);

  useEffect(() => {
    if (!initialData) {
      setDropData({});
    }
    dispatch(
      showFormPanel({ formType: 2, showForm: false, moduleId: 2, tab: 1 })
    );
  }, []);

  const handleDrop = (e, id, type) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("dragData"));
    if (item.type !== type) {
      return null;
    } else {
      // setDropData((pre) => ({ ...pre, [id]: item }));
      // if (dropData) {
      //   const tempObject = Object.keys(dropData[type]);
      //   const filtered = tempObject.filter((element) => {
      //     if (Object.values(element).includes(item.id)) {
      //       return true;
      //     } else return false;
      //   });
      //   if (filtered.length === 0) {
      //     setDropData((pre) => ({
      //       ...pre,
      //       [type]: { ...pre[type], [id]: item },
      //     }));
      //   }
      // }

      setDropData((pre) => ({ ...pre, [type]: { ...pre[type], [id]: item } }));
    }
  };

  const handleDragOver = (event, type) => {
    event.preventDefault();
    const item = event.dataTransfer.getData("dragData");
    if (item.type !== type) {
      return null;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("dashboardData")) {
      console.log(
        "savedData",
        JSON.parse(localStorage.getItem("dashboardData"))
      );
    }
    console.log("dropdata", dropData);
  }, [dropData]);

  const handleDelete = (id, type) => {
    console.log("id,type", id, type);
    setSavedColData((prevData) => {
      const newData = { ...prevData };
      // delete newData[id];
      delete newData[type][id];
      if (newData) {
        localStorage.setItem("dashboardData", JSON.stringify(newData));
      }
      return newData;
    });
    setDropData((prevData) => {
      const newData = { ...prevData };
      // delete newData[id];
      delete newData[type][id];
      return newData;
    });
  };
  const handleSave = (id, type) => {
    localStorage.setItem(
      "dashboardData",
      JSON.stringify({
        ...savedColData,
        [type]: { ...savedColData[type], [id]: dropData[type][id] },
      })
    );
    setSavedColData((pre) => ({
      ...pre,
      [type]: { ...pre[type], [id]: dropData[type][id] },
    }));
  };

  return (
    <Container className={"scrollable-container"}>
      <Row className={"d-flex justify-content-end"}>
        <Col
          md={10}
          lg={10}
          className={"d-flex justify-content-end"}
          style={{ marginRight: "10px", marginBottom: "10px" }}
        >
          <SaveIcon
            color="#1368b1"
            size={30}
            onClick={() => {
              localStorage.setItem("dashboardData", JSON.stringify(dropData));
              setSavedColData(dropData);
            }}
          />
          <DeleteIcon
            size={30}
            onClick={() => {
              localStorage.setItem("dashboardData", JSON.stringify({}));
              setDropData({});
              setSavedColData({});
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <CardBody>
              <CardTitle>Dnd Dashdboard</CardTitle>
              <Row
                style={{
                  // border: "1px dotted black",
                  minHeight: "10vh",
                  overflow: "auto",
                }}
              >
                <Col
                  xs={12}
                  md={3}
                  style={{ border: "1px dotted black", padding: 0 }}
                  onDrop={(event) => handleDrop(event, "kpi_one", "kpi")}
                  onDragOver={(e) => handleDragOver(e, "kpi")}
                  id="kpi_one"
                >
                  {dropData && dropData?.kpi?.kpi_one ? (
                    <PlotContainer>
                      <DeleteIconStyled>
                        <DeleteIcon
                          onClick={() => handleDelete("kpi_one", "kpi")}
                        />
                        <SaveIcon
                          color="#1368b1"
                          onClick={() => handleSave("kpi_one", "kpi")}
                        />
                      </DeleteIconStyled>
                      <KpiCard
                        title={Object.keys(dropData.kpi.kpi_one.data)[0]}
                        data={Object.values(dropData.kpi.kpi_one.data)[0]}
                      />
                    </PlotContainer>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        background: "#f2f4f7",
                      }}
                    >
                      <UploadIcon size={18} />
                      Drop a KPI here
                    </div>
                  )}
                </Col>
                <Col
                  xs={12}
                  md={3}
                  style={{ border: "1px dotted black", padding: 0 }}
                  onDrop={(event) => handleDrop(event, "kpi_two", "kpi")}
                  onDragOver={(e) => handleDragOver(e, "kpi")}
                  id="kpi_two"
                >
                  {dropData && dropData?.kpi?.kpi_two ? (
                    <PlotContainer>
                      <DeleteIconStyled>
                        <DeleteIcon
                          onClick={() => handleDelete("kpi_two", "kpi")}
                        />
                        <SaveIcon
                          color="#1368b1"
                          onClick={() => handleSave("kpi_two", "kpi")}
                        />
                      </DeleteIconStyled>
                      <KpiCard
                        title={Object.keys(dropData.kpi.kpi_two.data)[0]}
                        data={Object.values(dropData.kpi.kpi_two.data)[0]}
                      />
                    </PlotContainer>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        background: "#f2f4f7",
                      }}
                    >
                      <UploadIcon size={18} />
                      Drop a KPI here
                    </div>
                  )}
                </Col>
                <Col
                  xs={12}
                  md={3}
                  style={{ border: "1px dotted black", padding: 0 }}
                  onDrop={(event) => handleDrop(event, "kpi_three", "kpi")}
                  onDragOver={(e) => handleDragOver(e, "kpi")}
                  id="kpi_three"
                >
                  {dropData && dropData?.kpi?.kpi_three ? (
                    <PlotContainer>
                      <DeleteIconStyled>
                        <DeleteIcon
                          onClick={() => handleDelete("kpi_three", "kpi")}
                        />
                        <SaveIcon
                          color="#1368b1"
                          onClick={() => handleSave("kpi_three", "kpi")}
                        />
                      </DeleteIconStyled>
                      <KpiCard
                        title={Object.keys(dropData.kpi.kpi_three.data)[0]}
                        data={Object.values(dropData.kpi.kpi_three.data)[0]}
                      />
                    </PlotContainer>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        background: "#f2f4f7",
                      }}
                    >
                      <UploadIcon size={18} />
                      Drop a KPI here
                    </div>
                  )}
                </Col>
                <Col
                  xs={12}
                  md={3}
                  style={{ border: "1px dotted black", padding: 0 }}
                  onDrop={(event) => handleDrop(event, "kpi_four", "kpi")}
                  onDragOver={(e) => handleDragOver(e, "kpi")}
                  id="kpi_four"
                >
                  {dropData && dropData?.kpi?.kpi_four ? (
                    <PlotContainer>
                      <DeleteIconStyled>
                        <DeleteIcon
                          onClick={() => handleDelete("kpi_four", "kpi")}
                        />
                        <SaveIcon
                          color="#1368b1"
                          onClick={() => handleSave("kpi_four", "kpi")}
                        />
                      </DeleteIconStyled>
                      <KpiCard
                        title={Object.keys(dropData.kpi.kpi_four.data)[0]}
                        data={Object.values(dropData.kpi.kpi_four.data)[0]}
                      />
                    </PlotContainer>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        background: "#f2f4f7",
                      }}
                    >
                      <UploadIcon size={18} />
                      Drop a KPI here
                    </div>
                  )}
                </Col>
              </Row>
              <Row
                // onDrop={handleDrop}
                // onDragOver={handleDragOver}
                style={{
                  // border: "1px dotted black",
                  minHeight: "70vh",
                  overflow: "auto",
                }}
              >
                <Col
                  xs={12}
                  md={6}
                  style={{
                    border: "1px dotted black",
                    padding: 0,
                  }}
                  ref={colRef}
                  onDrop={(event) => handleDrop(event, "colLeft", "chart")}
                  onDragOver={(e) => handleDragOver(e, "chart")}
                  id="colLeft"
                >
                  {dropData && dropData?.chart?.colLeft ? (
                    <PlotContainer>
                      <DeleteIconStyled>
                        <DeleteIcon
                          onClick={() => handleDelete("colLeft", "chart")}
                        />
                        <SaveIcon
                          color="#1368b1"
                          onClick={() => handleSave("colLeft", "chart")}
                        />
                      </DeleteIconStyled>
                      <Plot
                        data={dropData.chart.colLeft.data}
                        layout={dropData.chart.colLeft.layout}
                        style={{
                          width: colRef?.current?.offsetWidth || "auto",
                          height: colRef?.current?.offsetHeight || "auto",
                        }}
                        useResizeHandler={true} // Automatically resize plot when the container size changes
                      />
                    </PlotContainer>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        background: "#f2f4f7",
                      }}
                    >
                      <UploadIcon size={18} />
                      Drop a graph here
                    </div>
                  )}
                </Col>
                <Col
                  xs={12}
                  md={6}
                  style={{ border: "1px dotted black", padding: 0 }}
                  ref={colRightRef}
                  onDrop={(event) => handleDrop(event, "colRight", "chart")}
                  onDragOver={(e) => handleDragOver(e, "chart")}
                  id="colRight"
                >
                  {dropData && dropData?.chart?.colRight ? (
                    <PlotContainer>
                      <DeleteIconStyled>
                        <DeleteIcon
                          onClick={() => handleDelete("colRight", "chart")}
                        />
                        <SaveIcon
                          color="#1368b1"
                          onClick={() => handleSave("colRight", "chart")}
                        />
                      </DeleteIconStyled>
                      <Plot
                        data={dropData.chart.colRight.data}
                        layout={dropData.chart.colRight.layout}
                        style={{
                          width: colRightRef?.current?.offsetWidth || "auto",
                          height: colRightRef?.current?.offsetHeight || "auto",
                        }}
                        useResizeHandler={true} // Automatically resize plot when the container size changes
                      />
                    </PlotContainer>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        background: "#f2f4f7",
                      }}
                    >
                      <UploadIcon size={18} />
                      Drop a graph here
                    </div>
                  )}
                </Col>
              </Row>
              <Row
                style={{
                  // border: "1px dotted black",
                  minHeight: "40vh",
                  overflow: "auto",
                }}
              >
                <Col
                  xs={12}
                  md={12}
                  style={{ border: "1px dotted black", padding: 0 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      background: "#f2f4f7",
                    }}
                  >
                    <UploadIcon size={18} />
                    Drop a table here
                  </div>
                </Col>
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
  z-index: 1000;
  padding: 5px;
  border-radius: 50%;
`;

const StyledCol = styled(Col)`
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledFilterButton = styled(Button)`
  height: 36px;
  margin-top: 15px;
  margin-right: 5px;
  margin-left: 5px;
`;

const StyledDownloadButton = styled(Button)`
  height: 36px;
  margin-top: 15px;
`;
