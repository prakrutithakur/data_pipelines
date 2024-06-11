import styled from 'styled-components';
import { Table as BootstrapTable } from 'react-bootstrap';
import {
  colorBackground,
  colorBackgroundBody,
  colorBlue,
  colorBorder,
  colorHeaderDataPicker,
  colorHover,
  colorText,
  colorTextAdditional,
} from '@/utils/palette';
import { right, left } from '@/utils/directions';

// eslint-disable-next-line import/prefer-default-export
export const Table = styled(BootstrapTable)`
  text-align: ${left};

  &:last-child {
    margin-bottom: 0;
  }

  table {
    width: inherit;
  }

  // For the alarm modal table
  thead.alarm-modal th {
    min-width: 200px;
  }
  thead.alarm-modal th:nth-child(2) {
    min-width: 70px;
  }

  td:first-child {
    min-width: 50px;
  }

  td:nth-child(2) {
    min-width: 50px;
  }
  // For the alarm modal table - End

  thead tr {
    position: sticky;
    top: 0;
    border-top: none;
  }

  thead th {
    min-height: 45px;
    min-width: 120px;
    padding: 10px;
    top: 0;
    position: sticky;
    color: ${colorText};
    border-bottom: 2px solid ${colorBorder};
    border-bottom-color: ${colorBorder} !important;
    background: ${colorBackground} !important;
    verticle-align: top;

    &:first-child {
      min-width: 45px;
    }
  }

  tbody td,
  tfoot td,
  th {
    border: none;
    padding: 10px;
    color: ${colorTextAdditional};
  }

  th {
    vertical-align: top;
    background: transparent !important;

    &:first-child {
      padding-left: 10px;
    }

    &:last-child {
      padding-right: 10px;
    }
  }
  td {
    vertical-align: middle;
    background: transparent !important;

    &:first-child {
      padding-left: 10px;
    }

    &:last-child {
      padding-right: 10px;
    }
  }

  .badge {
    font-size: 100%;
  }

  tfoot {
    tr {
      border-bottom: none;
    }

    td {
      min-height: 45px;
      max-width: 100px;
      padding: 10px 5px 10px 5px;
      font-family: 'Roboto', sans-serif;
      color: ${colorText};
      font-weight: 700;

      &:first-child {
        min-width: 45px;
        white-space: nowrap;
      }
    }
  }

  ${(props) =>
    props.bordered &&
    `
    text-align: ${left(props)};

    tr {
      border-top: none;
      border-bottom: 1px solid ${colorBorder(props)};
    }
    
    tbody tr:last-child {
      border-bottom: none;
    }
    tr:hover {
      background-color: ${colorHover(props)};
    }
  `}

  ${(props) =>
    props.headAccent &&
    `

    thead {
      color: ${colorTextAdditional(props)};
      background-color: ${colorHover(props)};

      th {
        border-bottom: none;
      }
    }
  `}

  ${(props) =>
    props.striped &&
    `

    tbody tr:nth-of-type(odd) {
      --bs-table-accent-bg: ${colorHover(props)};
      background-color: ${colorHover(props)};
      --bs-table-striped-color: ${colorTextAdditional(props)};
    }
    
  `}

  &.table-hover {
    tbody tr {
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: ${colorBackgroundBody};
      }
    }
  }

  &.react-table {
    thead tr {
      position: sticky;
      top: 0;
      background: white;
    }
  }

  .react-table__column-header {
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    &:first-child {
      margin-right: 10px;
    }

    &.sortable {
      cursor: pointer;

      svg {
        width: 16px;
        height: 16px;
        ${right}: -20px;
      }
    }
  }

  &.resizable-table {
    thead {
      min-width: 100px;
      overflow-y: auto;
      overflow-x: auto;

      &:first-child {
        min-width: 45px;
      }
    }

    tbody {
      overflow-y: auto;
      overflow-x: auto;
    }

    th,
    td {
      min-width: 100px !important;

      &:first-child {
        max-width: 60px;
        min-width: 60px !important;
      }

      .resizer {
        top: 5px;
        right: 10px;
        width: 4px;
        height: 70%;
        position: absolute;
        touch-action: none;
        background: ${colorBorder};

        &.isResizing {
          background: ${colorHeaderDataPicker};
        }
      }
    }
  }

  .react-dnd--off {
    pointer-events: none;
  }

  .react-dnd-draggable {
    z-index: 98 !important;

    td {
      width: inherit;

      &:first-child {
        width: 70px;
        min-width: 70px !important;
      }
    }
  }

  &.editable-table {
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -ms-user-select: none; /* IE10+ */

    thead {
      min-width: 100px;
      overflow-y: auto;
      overflow-x: auto;
    }

    th,
    td {
      min-width: 100px;

      &:first-child {
        max-width: 60px;
        min-width: 60px;
      }
    }

    .table__editable-table--cell-active {
      max-width: inherit;
      border: none;
      outline: 2px solid ${colorBlue};
      margin: -7px 10px -6px 0;
    }

    .table__edit-form {
      max-width: fit-content;
      border: none;
      border-radius: 0;
      font-size: 13px;
      font-family: 'Roboto', sans-serif;
      padding-left: 0;
      background-color: ${colorBackground};
      color: ${colorTextAdditional};

      &:active {
        border: none;
        outline: 1px solid ${colorBlue};
      }
    }

    .form-control {
      &:focus {
        box-shadow: none;
      }
    }
  }
`;
