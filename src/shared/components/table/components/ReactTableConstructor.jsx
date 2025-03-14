import React from 'react';
import PropTypes from 'prop-types';
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useResizeColumns,
  useRowSelect,
} from 'react-table';
import styled from 'styled-components';
import { scrollbarStyles } from '@/utils/palette';
import ReactTableHeader from './ReactTableHeader';
import BodyReactTable from './ReactTableBody';
// import ReactTableFooter from './ReactTableFooter';
import ReactTableFilter from './ReactTableFilter';
import ReactTablePagination from './ReactTablePagination';
import { Table } from '../../TableElements';

const ReactTableConstructor = ({ tableConfig, tableOptions, tableOptionalHook }) => {
  const {
    isEditable,
    isResizable,
    isSortable,
    withPagination,
    withSearchEngine,
    manualPageSize,
    placeholder,
  } = tableConfig;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    state,
    rows,
    prepareRow,
    page,
    pageCount,
    pageOptions,
    gotoPage,
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    setPageSize,
    setGlobalFilter,
    withDragAndDrop,
    updateDraggableData,
    updateEditableData,
    dataLength,
    state: { pageIndex, pageSize },
  } = useTable(
    tableOptions,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useResizeColumns,
    useRowSelect,
    ...tableOptionalHook
  );

  return (
    <div>
      {withSearchEngine && (
        <ReactTableFilter
          rows={rows}
          setGlobalFilter={setGlobalFilter}
          setFilterValue={tableOptions.setFilterValue}
          globalFilter={state.globalFilter}
          placeholder={placeholder}
          dataLength={dataLength}
        />
      )}
      <TableWrap pagination={withPagination}>
        <Table {...getTableProps()} bordered>
          <ReactTableHeader
            headerGroups={headerGroups}
            isSortable={isSortable}
            isResizable={isResizable}
          />
          {/* {tableOptions.isLoading ? (
            <tbody>
              <tr>
                <td colSpan={11}>
                  <div>
                    <DotDotLoader loadingState={tableOptions.isLoading} />
                  </div>
                </td>
              </tr>
            </tbody>
          ) : ( */}
            <BodyReactTable
              page={page}
              getTableBodyProps={getTableBodyProps}
              prepareRow={prepareRow}
              updateDraggableData={updateDraggableData}
              updateEditableData={updateEditableData}
              isEditable={isEditable}
              withDragAndDrop={withDragAndDrop}
              dashboardType={tableOptions.dashboardType}
              tableOptions={tableOptions}
            />
          {/* )} */}
          {/* {(pageCount === pageIndex + 1 || (!withPagination && rows.length !== 0)) && (
            <ReactTableFooter footerGroups={footerGroups} />
          )} */}
        </Table>
      </TableWrap>
      {withPagination && rows.length > 0 && (
        <ReactTablePagination
          page={page}
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageSize={pageSize}
          pageIndex={pageIndex}
          pageCount={pageCount}
          setPageSize={setPageSize}
          manualPageSize={manualPageSize}
          dataLength={dataLength}
          fetchData={tableOptions.fetchData}
          totalRecords={tableOptions.totalRecords}
          isFiltered={tableOptions.isFiltered}
        />
      )}
    </div>
  );
};

ReactTableConstructor.propTypes = {
  tableConfig: PropTypes.shape({
    isEditable: PropTypes.bool,
    isResizable: PropTypes.bool,
    isSortable: PropTypes.bool,
    withDragAndDrop: PropTypes.bool,
    withPagination: PropTypes.bool,
    withSearchEngine: PropTypes.bool,
    manualPageSize: PropTypes.arrayOf(PropTypes.number),
    placeholder: PropTypes.string,
  }),
  tableOptions: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    data: PropTypes.arrayOf(PropTypes.shape()),
    setFilterValue: PropTypes.func,
    updateDraggableData: PropTypes.func,
    updateEditableData: PropTypes.func,
    defaultColumn: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.shape({
        Cell: PropTypes.func,
      }).isRequired,
    ]),
    isEditable: PropTypes.bool,
    withDragAndDrop: PropTypes.bool,
    dataLength: PropTypes.number,
  }),
  tableOptionalHook: PropTypes.arrayOf(PropTypes.func).isRequired,
};

ReactTableConstructor.defaultProps = {
  tableConfig: {
    isEditable: false,
    isResizable: false,
    isSortable: false,
    withDragAndDrop: false,
    withPagination: false,
    withSearchEngine: false,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search...',
  },
  tableOptions: [
    {
      columns: [],
      data: [],
      setFilterValue: () => {},
      updateDraggableData: () => {},
      updateEditableData: () => {},
      defaultColumn: [],
      withDragAndDrop: false,
      dataLength: null,
      disableSortBy: false,
      manualSortBy: false,
      manualGlobalFilter: false,
      manualPagination: false,
    },
  ],
};

export default ReactTableConstructor;

// region STYLES

const TableWrap = styled.div`
  overflow-x: auto;

  ${scrollbarStyles};

  ${(props) =>
    props.pagination
      ? `
    margin-bottom: 1rem;
  `
      : `
    height: 458px;
  
    tbody {
      top: 30px;
    }
  `}
`;

// endregion
