import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
  CardSubhead,
} from "@/shared/components/Card";
import ReactTableBase from "@/shared/components/table/ReactTableBase";
import { Col } from "react-bootstrap";
import DeleteIcon from "mdi-react/TrashCanIcon";
import LockIcon from "mdi-react/LockIcon";
import {
  PlotContainer,
  PlotContainerStyled,
  DeleteIconStyled,
} from "../../SharedStyles/SharedStyles";

const SingleTableContainer = ({
  id,
  dropData,
  handleDrop,
  handleDragOver,
  handleDelete,
  handleSave,
}) => {
  const tableConfig = {
    isSortable: false,
    isResizable: false,
    withPagination: false,
    manualPageSize: [10, 20, 30, 40],
  };

  return (
    <PlotContainerStyled as={PlotContainer}>
      <Col
        md={12}
        lg={12}
        sm={12}
        onDrop={(event) => handleDrop(event, id, "table")}
        onDragOver={(e) => handleDragOver(e, id)}
        id={id}
      >
        <Card>
          <CardBody>
            <CardTitleWrap>
              <CardTitle>Table Title</CardTitle>
              <CardSubhead>Subhead if any</CardSubhead>
            </CardTitleWrap>
            {dropData?.table?.table?.data && (
              <DeleteIconStyled>
                <LockIcon
                  size={18}
                  color="#1368b1"
                  onClick={() => handleSave(id, "table")}
                />
                <DeleteIcon
                  size={18}
                  onClick={() => handleDelete(id, "table")}
                />
              </DeleteIconStyled>
            )}

            {dropData?.table?.table?.data && (
              <ReactTableBase
                columns={dropData.table[id].data.tableHeaderData}
                data={dropData.table[id].data.tableRowData || []}
                tableConfig={tableConfig}
                paginationDetail={{
                  totalPages: 0,
                  totalRecords: 0,
                }}
                loading={false}
                dashboardType={"Global"}
              />
            )}
            {/* <TableNoData /> */}
          </CardBody>
        </Card>
      </Col>
    </PlotContainerStyled>
  );
};

export default SingleTableContainer;
