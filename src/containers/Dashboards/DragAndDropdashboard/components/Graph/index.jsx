import React from "react";
import SingleGraphContainer from "./SingleGraphContainer";
const GraphsRow = (props) => {
  const graphArray = [{ id: "colLeft" }, { id: "colRight" }];
  return (
    <>
      {graphArray.map((item) => (
        <SingleGraphContainer {...props} id={item.id} key={item.id} />
      ))}
    </>
  );
};

export default GraphsRow;
