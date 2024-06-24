import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { showFormPanel } from "@/redux/actions/FormTypeActions/formType";
import KPIRow from "./components/KPI";
import GraphsRow from "./components/Graph";
import TableRow from "./components/Table";
import DashboardIcons from "./components/DashboardIcons";
const DragAndDropdashboard = () => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const initialData = JSON.parse(localStorage.getItem("dashboardData"));
  const [dropData, setDropData] = useState(initialData);
  const [savedColData, setSavedColData] = useState(initialData);
  const isSaved = JSON.stringify(dropData) === JSON.stringify(savedColData);
  const [dashboardSaved, setDashboardSaved] = useState(isSaved);
  // const [borderedItems, setBorderedItems] = useState([]);

  useEffect(() => {
    if (!initialData) {
      setDropData({});
      setSavedColData({});
    }
    dispatch(
      showFormPanel({ formType: 2, showForm: false, moduleId: 2, tab: 1 })
    );
  }, []);

  useEffect(() => {
    if (localStorage.getItem("dashboardData")) {
      console.log(
        "savedData",
        JSON.parse(localStorage.getItem("dashboardData"))
      );
    }
  }, [dropData]);

  const handleDrop = (e, id, type) => {
    e.preventDefault();
    setDashboardSaved(false);
    const item = JSON.parse(e.dataTransfer.getData("dragData"));
    if (item.type !== type) {
      return null;
    } else {
      setDropData((pre) => ({ ...pre, [type]: { ...pre[type], [id]: item } }));
    }
  };

  const scrolltoBottom = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  const handleDragOver = (event, type) => {
    event.preventDefault();
    const item = event.dataTransfer.getData("dragData");
    if (item.type !== type) {
      return null;
    }
  };

  const handleDelete = (id, type) => {
    setDashboardSaved(false);
    setSavedColData((prevData) => {
      const newData = { ...prevData };
      if (newData[type] && newData[type][id]) {
        delete newData[type][id];
      }
      return newData;
    });
    setDropData((prevData) => {
      const newData = { ...prevData };
      delete newData[type][id];
      localStorage.setItem("dashboardData", JSON.stringify(newData));
      return newData;
    });
  };

  const handleSave = (id, type) => {
    setDashboardSaved(true);
    if (dropData[type] && dropData[type][id]) {
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
    }
  };

  const handleDeleteDashboard = () => {
    setDashboardSaved(false);
    localStorage.setItem("dashboardData", JSON.stringify({}));
    setDropData({});
    setSavedColData({});
  };

  const handleSaveDashboard = () => {
    setDashboardSaved(true);
    localStorage.setItem("dashboardData", JSON.stringify(dropData));
    setSavedColData(dropData);
  };

  return (
    <Container ref={containerRef}>
      <Row>
        <DashboardIcons
          dropData={dropData}
          savedColData={savedColData}
          handleSaveDashboard={handleSaveDashboard}
          handleDeleteDashboard={handleDeleteDashboard}
          dashboardSaved={dashboardSaved}
        />
      </Row>
      <Row>
        <KPIRow
          dropData={dropData}
          savedColData={savedColData}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDelete={handleDelete}
          handleSave={handleSave}
        />
      </Row>
      <Row>
        <GraphsRow
          dropData={dropData}
          savedColData={savedColData}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDelete={handleDelete}
          handleSave={handleSave}
        />
      </Row>
      <Row>
        <TableRow
          dropData={dropData}
          savedColData={savedColData}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDelete={handleDelete}
          handleSave={handleSave}
        />
      </Row>
    </Container>
  );
};

export default DragAndDropdashboard;
