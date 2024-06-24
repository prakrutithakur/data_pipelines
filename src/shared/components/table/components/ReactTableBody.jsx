import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colorBackground } from "@/utils/palette";
import { left } from "@/utils/directions";
import DotDotLoader from "@/shared/components/DotDotLoader";

const ReactTableDefaultBody = ({
  page,
  getTableBodyProps,
  prepareRow,
  dashboardType,
  tableOptions,
}) => (
  <tbody {...getTableBodyProps()}>
    {tableOptions.isLoading && (
      <tr style={{ padding: "0", border: "none" }}>
        <td style={{ padding: "0" }}>
          <PanelRefresh>
            <DotDotLoader loadingState={tableOptions.isLoading} />
          </PanelRefresh>
        </td>
      </tr>
    )}
    {page.map((row) => {
      prepareRow(row);

      return (
        <tr
          {...row.getRowProps()}
          style={{ cursor: dashboardType !== "Diagnostics" ? "pointer" : "" }}
        >
          {row.cells.map((cell) =>
            dashboardType !== "" ? (
              <TableData {...cell.getCellProps()} bg={cell.row.original.color}>
                <span>{cell.render("Cell")}</span>
              </TableData>
            ) : (
              <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
            )
          )}
        </tr>
      );
    })}
  </tbody>
);

ReactTableDefaultBody.propTypes = {
  page: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTableBodyProps: PropTypes.func.isRequired,
  prepareRow: PropTypes.func.isRequired,
};

const ReactTableBody = ({
  page,
  getTableBodyProps,
  prepareRow,
  withDragAndDrop,
  updateDraggableData,
  dashboardType,
  tableOptions,
}) => {
  const theme = useSelector((state) => state.theme);

  return (
    <Fragment>
      <ReactTableDefaultBody
        page={page}
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
        dashboardType={dashboardType}
        tableOptions={tableOptions}
      />
    </Fragment>
  );
};

ReactTableBody.propTypes = {
  page: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTableBodyProps: PropTypes.func.isRequired,
  prepareRow: PropTypes.func.isRequired,
  updateDraggableData: PropTypes.func.isRequired,
};

export default ReactTableBody;

const TableData = styled.td`
  &:nth-child(1) {
    span {
      background-color: #${(props) => props.bg} !important;
      display: inline-block;
      padding: 2px;
      width: 84px;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 50px;
    }
  }
  &:last-child {
    button {
      display: inline-block;
      padding: 2px;
      width: 84px;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border: 1px solid #dddddd;
      background-color: transparent;
    }
    button:hover {
      background-color: #dddddd;
    }
  }
`;

const PanelRefresh = styled.div`
  position: absolute;
  width: 100%;
  // height: 100%;
  top: 50%;
  ${left}: 0;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    // height: 100%;
    z-index: 99;
    top: 50%;
    ${left}: 0;
    border-radius: 5px;
    background-color: ${colorBackground};
    opacity: 0.8;
  }

  svg {
    position: absolute;
    top: calc(50% - 24px);
    ${left}: calc(50% - 24px);
  }
`;
