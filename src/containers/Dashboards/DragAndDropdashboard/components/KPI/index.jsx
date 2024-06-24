import React from "react";
import SingleKPIContainer from "./SingleKPIContainer";

const KPIRow = (props) => {
  const KPIArray = [
    { color: "#006B38", gradient: "green-vehicles", id: "kpi_one" },
    { color: "#F57A08", gradient: "orange-vehicles", id: "kpi_two" },
    { color: "#D21D26", gradient: "red-vehicles", id: "kpi_three" },
    { color: "grey", gradient: "grey-vehicles", id: "kpi_four" },
  ];

  return (
    <>
      {KPIArray.map((item) => (
        <SingleKPIContainer {...props} item={item} key={item.id} />
      ))}
    </>
  );
};

export default KPIRow;
