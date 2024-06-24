import React from "react";
import { Card, CardTitle } from "@/shared/components/Card";
import DeleteIcon from "mdi-react/TrashCanIcon";
import LockIcon from "mdi-react/LockIcon";
import LockOpenIcon from "mdi-react/LockOpenVariantIcon";
import UndoIcon from "mdi-react/ArrowULeftTopBoldIcon";
import RedoIcon from "mdi-react/ArrowURightTopBoldIcon";

const DashboardIcons = ({
  dropData,
  savedColData,
  handleSaveDashboard,
  handleDeleteDashboard,
  dashboardSaved,
}) => {
  return (
    <Card>
      <CardTitle
        style={{
          marginBottom: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ marginBottom: "12px" }}>Dashboard</span>
        <span>
          {/* <UndoIcon size={18} style={{ cursor: "pointer" }} />
          <RedoIcon size={18} style={{ cursor: "pointer" }} /> */}
          {dashboardSaved ? (
            <LockIcon color="#1368b1" size={18} />
          ) : (
            <LockOpenIcon
              color="#1368b1"
              size={18}
              onClick={handleSaveDashboard}
              style={{ cursor: "pointer" }}
            />
          )}
          <DeleteIcon
            size={18}
            onClick={handleDeleteDashboard}
            style={{ cursor: "pointer" }}
          />
        </span>
      </CardTitle>
    </Card>
  );
};

export default DashboardIcons;
