import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { colorBackground } from "@/utils/palette";
import { Button } from "@/shared/components/Button";
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
} from "@/shared/components/form/FormElements";
import FormField from "@/shared/components/form/FormField";
import Plot from "react-plotly.js";
import { fig } from "./dummy";

const Chat = () => {
  const [arraytexts, setarraytexts] = useState([]);
  const [loading, setloading] = useState(false);

  const onSubmit = async (values, form) => {
    if (values && Object.keys(values)) {
      const { message } = values;
      setarraytexts((pre) => [...pre, message]);
      try {
        setloading(true);

        //uncomment below
        // const questionResponse = await axios.get(
        //   `http://192.168.0.135:8085/api/v0/generate_sql?question=${message}`
        // );
        // const id = questionResponse.data.id;
        // const run_sql = await axios.get(
        //   `http://192.168.0.135:8085/api/v0/run_sql?id=${id}`
        // );
        // console.log("run_sql", run_sql);

        // // if (run_sql.should_generate_chart) {
        // const generate_plotly = await axios.get(
        //   `http://192.168.0.135:8085/api/v0/generate_plotly_figure?id=${id}`
        // );

        const data = JSON.parse(fig).data;
        const layout = JSON.parse(fig).layout;
        layout["height"] = "100%";
        layout["width"] = "100%";
        console.log("layout", layout);
        setarraytexts((pre) => [...pre, { data, layout }]);
        //uncomment below
        // if (generate_plotly.data.fig) {
        //   // const fig = generate_plotly.data.fig;
        //   const data = JSON.parse(fig).data;
        //   const layout = JSON.parse(fig).layout;
        //   setarraytexts((pre) => [...pre, { data, layout, id }]);
        // }
        //uncomment below
        // if (
        //   generate_plotly.data.type &&
        //   generate_plotly.data.type === "error"
        // ) {
        //   setarraytexts((pre) => [...pre, generate_plotly.data]);
        // }

        // } else {
        //   const generate_summary = await axios.get(
        //     `http://192.168.0.135:8085/api/v0/generate_summary?id=${id}`
        //   );
        //   setarraytexts((pre) => [...pre, { data: generate_summary.data.text, id }]);
        // }
      } catch (error) {
        setarraytexts((pre) => [...pre, { data: "error" }]);
        console.error("Error", error);
      } finally {
        setloading(false);
        form.restart();
      }
    }
  };

  const handleDragStart = (e, item) => {
    console.log("handleDrag", JSON.stringify(item));
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  return (
    <>
      <>Ask a question</>

      <ChatContainer>
        <span>
          {arraytexts.map((item, index) => {
            const graph = index % 2 === 0 ? false : true;

            return !graph ? (
              <UserPrompts>
                {item
                  .replace(/\n+/g, "\n\n")
                  .split("\n")
                  .map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </UserPrompts>
            ) : (
              <UserProblems
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                style={{ border: "2px solid black" }}
              >
                {item.data && item.layout ? (
                  <Plot data={item.data} layout={item.layout} />
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
              <FormGroupField>
                <Field
                  name="message"
                  type="text"
                  component={FormField}
                  placeholder="Type a message..."
                />
              </FormGroupField>
            </FormGroup>
            <FormButtonToolbar>
              <Button
                variant="primary"
                type="submit"
                disabled={submitting || pristine || loading}
              >
                {loading ? "Loading..." : "Send"}
              </Button>
            </FormButtonToolbar>
          </FormContainer>
        )}
      />
    </>
  );
};

export default Chat;

// region STYLES

const ChatContainer = styled.div`
  height: calc(100vh - 400px);
  display: flex;
  overflow: auto;
  position: relative;
  border-radius: 5px;
  background-color: ${colorBackground};
`;

const UserPrompts = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  border-radius: 20px 0px 20px 20px;
  background: #4a6e9c;
  box-shadow: 0px 1px 86px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
  margin-top: 10px;
  white-space: normal; /* Allow the text to wrap */
  word-break: break-word; /* Break long words to prevent overflow */
  height: auto; /* Allow the height to adjust based on content */
  padding: 12px; /* Add some padding for spacing */
  display: flex; /* Use flex display for alignment */
  align-items: flex-start; /* Align text to the top */
  justify-content: flex-start;
  flex-wrap: wrap; /* Allow text to wrap within the component */
  max-width: 90%; /* Ensure the component doesn't exceed its container */
  align-self: flex-end; /* Align the UserProblems to the right */
  margin-right: 10px;
`;

const UserProblems = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  border-radius: 0px 20px 20px 20px;
  background: #8e85ca;
  width: 447px;
  margin-top: 10px;
  height: auto; /* Allow the height to adjust based on content */
  display: flex; /* Use flex display for alignment */
  align-items: flex-start; /* Align text to the top */
  justify-content: flex-start;
  flex-wrap: wrap; /* Allow text to wrap within the component */
  align-self: flex-start; /* Align the UserProblems to the right */
  margin-left: 10px;
  overflow: auto;
  width: 20vw;
`;
