import React from "react";
import SingleTableContainer from "./SingleTableContainer";

const TableRow = (props) => {
  const tablesArray = [{ id: "table" }];

  return (
    <>
      {tablesArray.map((item) => (
        <SingleTableContainer {...props} id={item.id} key={item.id} />
      ))}
    </>
  );
};

export default TableRow;
