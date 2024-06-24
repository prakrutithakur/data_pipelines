import React, { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import SaveIcon from "mdi-react/SendIcon";
import { colorBackground } from "@/utils/palette";
import { Button } from "@/shared/components/Button";
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
} from "@/shared/components/form/FormElements";
import { Card, CardBody } from "@/shared/components/Card";
import FormField from "@/shared/components/form/FormField";
import Plot from "react-plotly.js";
import { SERVER_BASE_URL } from "../../../../config/GlobalUrl";
import ReactTableBase from "@/shared/components/table/ReactTableBase";
import KpiCard from "./KPICard";
import CreateTableData from "../../DragAndDropdashboard/components/Table/CreateData";
import { hideFormPanel } from "../../../../redux/actions/FormTypeActions/formType";

const Chat = () => {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const localArraytexts = JSON.parse(localStorage.getItem("arraytexts") || []);
  const [arraytexts, setarraytexts] = useState(localArraytexts);
  const [loading, setloading] = useState(false);

  const tableConfig = {
    isSortable: false,
    isResizable: false,
    withPagination: false,
    manualPageSize: [10, 20, 30, 40],
  };

  useEffect(() => {
    if (arraytexts) {
      localStorage.setItem("arraytexts", JSON.stringify(arraytexts));
    }
    return null;
  }, [arraytexts]);

  const onSubmit = async (values, form) => {
    if (values && Object.keys(values)) {
      const { message } = values;
      setarraytexts((pre) => [...pre, { from: "user", message }]);
      try {
        setloading(true);

        //uncomment below
        const questionResponse = await axios.get(
          `${SERVER_BASE_URL}/generate_sql?question=${message}`
        );
        const id = questionResponse.data.id;
        const run_sql = await axios.get(`${SERVER_BASE_URL}/run_sql?id=${id}`);

        if (run_sql && run_sql.data && run_sql.data.type === "df") {
          const info = JSON.parse(run_sql.data.df);
          if (info.length === 1) {
            setarraytexts((pre) => [
              ...pre,
              { data: info[0], id, type: "kpi", from: "ai" },
            ]);
          } else {
            const data = CreateTableData(info);
            setarraytexts((pre) => [
              ...pre,
              {
                data: {
                  tableHeaderData: data.tableHeaderData,
                  tableRowData: data.tableRowData,
                },
                id,
                type: "table",
                from: "ai",
              },
            ]);
          }
        }

        // if (run_sql.should_generate_chart) {
        const generate_plotly = await axios.get(
          `${SERVER_BASE_URL}/generate_plotly_figure?id=${id}`
        );

        // const data = JSON.parse(fig).data;
        // const layout = JSON.parse(fig).layout;

        if (generate_plotly.data.fig) {
          const fig = generate_plotly.data.fig;
          const data = JSON.parse(fig).data;
          const layout = JSON.parse(fig).layout;
          setarraytexts((pre) => [
            ...pre,
            { data, layout, id, type: "chart", from: "ai" },
          ]);
        }

        // if (
        //   generate_plotly.data.type &&
        //   generate_plotly.data.type === "error"
        // ) {
        //   setarraytexts((pre) => [...pre, generate_plotly.data]);
        // } else {
        //   const generate_summary = await axios.get(
        //     `${SERVER_BASE_URL}/api/v0/generate_summary?id=${id}`
        //   );
        //   // setarraytexts((pre) => [
        //   //   ...pre,
        //   //   { data: generate_summary.data.text, id },
        //   // ]);
        //   setarraytexts((pre) => [
        //     ...pre,
        //     {
        //       data: generate_summary.data.text,
        //       id,
        //       type: "summary",
        //     },
        //   ]);
        // }
      } catch (error) {
        setarraytexts((pre) => [
          ...pre,
          { data: "error", from: "ai", type: "error" },
        ]);
        console.error("Error", error);
      } finally {
        setloading(false);
        form.restart();
      }
    }
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("dragData", JSON.stringify(item));
    dispatch(hideFormPanel());
  };

  const scrolltoBottom = (event) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = container.scrollTop;
    const y = event.clientY - rect.top;

    // Adjust the threshold as needed
    const scrollThreshold = 50;

    // Check if the mouse position is near the bottom
    if (rect.bottom - y < scrollThreshold) {
      container.scrollTop = scrollTop + scrollThreshold;
    }
  };

  return (
    <>
      <p style={{ fontWeight: "bold" }}>Ask a question</p>
      <ChatContainer ref={containerRef}>
        <span style={{ width: "95%" }}>
          {arraytexts.map((item, index) => {
            const user = !!!item.from === "user";

            return !user && item.message ? (
              <UserPromptContainer key={index}>
                <UserPromptUpdated>
                  {item.message
                    .replace(/\n+/g, "\n\n")
                    .split("\n")
                    .map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </UserPromptUpdated>
              </UserPromptContainer>
            ) : (
              <UserProblems
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                key={index}
              >
                {item.data && item.layout ? (
                  <Plot
                    data={item.data}
                    layout={item.layout}
                    style={{ width: "100%" }}
                  />
                ) : item.type === "kpi" ? (
                  <KpiCard
                    title={Object.keys(item.data)[0]}
                    data={Object.values(item.data)[0]}
                    style={{ border: "2px solid black" }}
                  />
                ) : item.type === "table" ? (
                  <Card style={{ paddingBottom: 12 }}>
                    <CardBody>
                      <ReactTableBase
                        columns={item.data.tableHeaderData}
                        data={item.data.tableRowData}
                        tableConfig={tableConfig}
                        paginationDetail={{
                          totalPages: 0,
                          totalRecords: 0,
                        }}
                        loading={false}
                        dashboardType={"Global"}
                      />
                    </CardBody>
                  </Card>
                ) : (
                  <>{item.data}</>
                )}
              </UserProblems>
            );
          })}
        </span>
      </ChatContainer>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <FormContainer onSubmit={handleSubmit}>
            <FormGroup>
              <InputContainer>
                <StyledInput
                  name="message"
                  type="text"
                  component={FormField}
                  placeholder="Type a message..."
                  style={{
                    borderTop: "1px solid #197BCE",
                  }}
                />
                <IconContainer onClick={handleSubmit}>
                  <SaveIcon color="#197BCE" />
                </IconContainer>
              </InputContainer>
            </FormGroup>
          </FormContainer>
        )}
      />
    </>
  );
};

export default Chat;

// region STYLES

const ChatContainer = styled.div`
  overflow: auto;
  border-radius: 5px;
  // background-color: ${colorBackground};
  background-color: #adacac;
  height: 75vh;
`;

const UserPromptContainer = styled.span`
  width: 95%;
  height: auto;
  max-width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-self: flex-end;
  margin-left: 10px;
  margin-top: 10px;
`;

const UserPromptUpdated = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  border-radius: 20px 0px 20px 20px;
  background: #4a6e9c;
  box-shadow: 0px 1px 86px 0px rgba(0, 0, 0, 0.15);
  width: 60%;
  padding: 12px;
  text-align: right;
`;

const UserPrompts = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  border-radius: 20px 0px 20px 20px;
  background: #4a6e9c;
  box-shadow: 0px 1px 86px 0px rgba(0, 0, 0, 0.15);
  width: 90%;
  margin-top: 10px;
  white-space: normal;
  word-break: break-word;
  height: auto;
  padding: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  max-width: 100%;
  align-self: flex-end;
  margin-left: 10px;
`;

const UserProblems = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  border-radius: 0px 20px 20px 20px;
  background: transparent;
  width: 95%;
  max-width: 95%;
  margin-top: 10px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-self: flex-start;
  margin-left: 10px;
  overflow: auto;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Field)`
  width: 100%;
  padding-right: 30px;
`;

const IconContainer = styled.span`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// code snippet for send button
{
  /* <FormButtonToolbar>
              <Button
                variant="primary"
                type="submit"
                disabled={submitting || pristine || loading}
              >
                {loading ? "Loading..." : "Send"}
              </Button>
            </FormButtonToolbar> */
}
