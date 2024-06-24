import React, { useRef } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import Plot from "react-plotly.js";
import DeleteIcon from "mdi-react/TrashCanIcon";
import LockIcon from "mdi-react/LockIcon";
import LockOpenIcon from "mdi-react/LockOpenVariantIcon";
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
  CardSubhead,
} from "@/shared/components/Card";
import {
  PlotContainer,
  DeleteIconStyledGraph,
  PlotContainerStyledGrapgh,
} from "../../SharedStyles/SharedStyles";

const SingleGraphContainer = ({
  id,
  dropData,
  savedColData,
  handleDrop,
  handleDragOver,
  handleSave,
  handleDelete,
}) => {
  const ref = useRef(null);
  return (
    <Col
      lg={6}
      xl={6}
      sm={12}
      onDrop={(event) => handleDrop(event, id, "chart")}
      onDragOver={(e) => handleDragOver(e, "chart")}
      id={id}
    >
      <StyledCard>
        <CardBody>
          {dropData && dropData?.chart?.[id] ? (
            <PlotContainerStyledGrapgh as={PlotContainer}>
              <DeleteIconStyledGraph>
                {savedColData.chart?.[id]?.data &&
                savedColData.chart?.[id]?.data ===
                  dropData?.chart?.[id]?.data ? (
                  <LockIcon size={18} color="#1368b1" />
                ) : (
                  <LockOpenIcon
                    size={18}
                    color="#1368b1"
                    onClick={() => handleSave(id, "chart")}
                  />
                )}
                <DeleteIcon
                  size={18}
                  onClick={() => handleDelete(id, "chart")}
                />
              </DeleteIconStyledGraph>
              <div style={{ height: "15px" }} />
              <Plot
                data={dropData.chart[id].data}
                layout={dropData.chart[id].layout}
                style={{
                  width: ref?.current?.offsetWidth || "auto",
                  height: ref?.current?.offsetHeight || "auto",
                }}
                useResizeHandler={true}
              />
            </PlotContainerStyledGrapgh>
          ) : (
            <CardTitleWrap>
              <CardTitle>Graph Title</CardTitle>
              <CardSubhead>Subhead if any</CardSubhead>
            </CardTitleWrap>
          )}
        </CardBody>
      </StyledCard>
    </Col>
  );
};

export default SingleGraphContainer;

const StyledCard = styled(Card)`
  min-height: 50vh;
`;
