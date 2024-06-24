import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  PlotContainer,
  PlotContainerStyled,
  DeleteIconStyled,
} from "../../SharedStyles/SharedStyles";
import { Col } from "react-bootstrap";
import DeleteIcon from "mdi-react/TrashCanIcon";
import LockIcon from "mdi-react/LockIcon";
import LockOpenIcon from "mdi-react/LockOpenVariantIcon";
import KpiCard from "./KpiCard";

const SingleKPIContainer = ({
  item,
  dropData,
  handleDrop,
  handleDragOver,
  handleDelete,
  handleSave,
  savedColData,
}) => {
  return (
    <Col
      md={12}
      xl={3}
      lg={6}
      xs={12}
      onDrop={(event) => handleDrop(event, item.id, "kpi")}
      onDragOver={(e) => {
        console.log("heeh", e.dataTransfer.getData("dragData"));
        handleDragOver(e, "kpi");
      }}
      id={item.id}
    >
      <PlotContainerStyled as={PlotContainer}>
        {dropData?.kpi?.[item.id]?.data && (
          <DeleteIconStyled>
            {savedColData.kpi?.[item.id]?.data &&
            savedColData.kpi?.[item.id]?.data ===
              dropData?.kpi?.[item.id]?.data ? (
              <LockIcon size={18} color="#1368b1" />
            ) : (
              <LockOpenIcon
                size={18}
                color="#1368b1"
                onClick={() => handleSave(item.id, "kpi")}
              />
            )}
            <DeleteIcon
              size={18}
              onClick={() => handleDelete(item.id, "kpi")}
            />
          </DeleteIconStyled>
        )}
        <KpiCard
          color={item.color}
          gradient={item.gradient}
          title={
            dropData?.kpi?.[item.id]?.data
              ? Object.keys(dropData.kpi[item.id].data)[0]
              : "Title"
          }
          count={
            dropData?.kpi?.[item.id]?.data
              ? Object.values(dropData.kpi[item.id].data)[0]
              : 0
          }
          //   loading={loading}
          //   error={error}
          // border={false}
        />
      </PlotContainerStyled>
    </Col>
  );
};

export default SingleKPIContainer;
