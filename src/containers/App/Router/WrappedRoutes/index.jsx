import React from "react";
import { Routes, Route, useLocation, useParams, Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";
import { colorBackgroundBody } from "@/utils/palette";
import { paddingLeft } from "@/utils/directions";
import Layout from "../../../Layout/index";
// import Breadcrumbs from './Breadcrumbs';
import AutoLogout from "./AutoLogout";
import NotFound404 from "../../../DefaultPage/404";
import ErrorFallback from "../../ErrorFallback";
import GlobalDashboard from "../../../Dashboards/Home";

const AppRoutes = () => {
  const userDetails = JSON.parse(localStorage.getItem("user"));

  const routes = [
    {
      path: "/global",
      name: "Global Dashboard",
      Component: GlobalDashboard,
      userRole: "",
      companyRole: "",
    },
    {
      path: "/dashboard",
      name: "Global Dashboard",
      Component: GlobalDashboard,
      userRole: "",
      companyRole: "",
    },
  ];

  return (
    <AutoLogout>
      <Layout />
      <ContainerWrap>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            {routes.map(({ path, Component, name }, key) => (
              <Route
                path={path}
                key={key}
                element={
                  <RouteWrapper name={name}>
                    <Component />
                  </RouteWrapper>
                }
              />
            ))}
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </ErrorBoundary>
      </ContainerWrap>
    </AutoLogout>
  );
};

const RouteWrapper = ({ children, name }) => {
  const location = useLocation();
  const crumbs = generateBreadcrumbs(location);

  return (
    <div className="p-8">
      <Breadcrumbs crumbs={crumbs} />
      {children}
    </div>
  );
};

const generateBreadcrumbs = (location) => {
  const pathnames = location.pathname.split("/").filter((x) => x);
  return pathnames.map((value, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    return { name: value, path: routeTo };
  });
};

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link to={crumb.path}>{crumb.name}</Link>
          {index < crumbs.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};

const ContainerWrap = styled.div`
  padding-top: 90px;
  min-height: 100vh;
  transition: padding-left 0.3s;

  ${paddingLeft}: 0;

  background: ${colorBackgroundBody};

  @media screen and (min-width: 576px) {
    ${paddingLeft}: 250px;
  }

  @media screen and (max-width: 576px) {
    padding-top: 150px;
  }
`;

export default AppRoutes;
