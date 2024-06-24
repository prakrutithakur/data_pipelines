import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
} from "@/shared/components/Card";
import { Nav, Tab } from "react-bootstrap";
import {
  TabsWrap,
  NavLink,
  NavItem,
  BorderedBottomTabs,
} from "@/shared/components/Tabs";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";

const ConfigForm = ({ formtype }) => {
  const [activeKey, setActivekey] = useState(1);

  return (
    <Card>
      <CardBody
        style={{
          backgroundColor: "transparent",
          padding: "5px 5px 5px 10px",
        }}
      >
        {/* {localStorage.getItem('formResponse') ? (
          <h5 style={{ textAlign: 'center', fontWeight: '700', color: '#61A05E' }}>Connected</h5>
        ) : (
          <h5 style={{ textAlign: 'center', fontWeight: '700', color: '#C21807' }}>
            Not Connected
          </h5>
        )} */}
        <BorderedBottomTabs>
          <Tab.Container
            activeKey={activeKey}
            onSelect={(k) => setActivekey(k)}
          >
            <TabsWrap>
              {formtype && formtype === 1 && (
                <Nav className="nav-tabs">
                  <NavItem>
                    <NavLink eventKey="1">Input</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="2">Output</NavLink>
                  </NavItem>
                </Nav>
              )}
              <Tab.Content>
                <Tab.Pane eventKey="1" style={{ padding: 0 }}>
                  {/* TODO: Add some condition to dynamically change forms. Use formtype prop */}
                  {formtype && formtype === 1 ? (
                    <FormOne setActivekey={setActivekey} />
                  ) : (
                    <FormTwo />
                  )}
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <div>
                    {localStorage.getItem("formResponse") ? (
                      <>
                        <p>
                          Hostname:{" "}
                          {
                            JSON.parse(localStorage.getItem("formResponse"))
                              ?.server_details?.hostname
                          }
                        </p>
                        <p>
                          Port:{" "}
                          {
                            JSON.parse(localStorage.getItem("formResponse"))
                              ?.server_details?.port
                          }
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </TabsWrap>
          </Tab.Container>
        </BorderedBottomTabs>
      </CardBody>
    </Card>
  );
};

export default ConfigForm;
