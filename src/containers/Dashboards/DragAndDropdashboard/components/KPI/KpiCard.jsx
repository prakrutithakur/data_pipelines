import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Card, CardBody } from "@/shared/components/Card";
import ProgressBar from "@/shared/components/ProgressBar";
import DotDotLoader from "@/shared/components/DotDotLoader";
import { percentage } from "@/utils/helpers";
import { colorAccent, colorText } from "@/utils/palette";
import { left } from "@/utils/directions";

const KpiCard = ({
  title,
  color,
  gradient,
  loading,
  count,
  total,
  error,
  border,
}) => {
  return (
    <Card>
      <KpiCardBody border={border}>
        <KpiCardDescription>{title}</KpiCardDescription>
        {loading ? (
          <DotDotLoader loadingState={loading} />
        ) : count ? (
          <KpiCardWrap>
            <KpiCardTitle color={color}>{count}</KpiCardTitle>
          </KpiCardWrap>
        ) : (
          <KpiCardWrap>
            <KpiCardTitle color={color}>0</KpiCardTitle>
          </KpiCardWrap>
        )}
        {/* <ProgressBar
          now={count ? percentage(count, total) : 0}
          label={count ? percentage(count, total) + "%" : "0%"}
          rounded
          size="small"
          gradient={gradient}
          top
        /> */}
      </KpiCardBody>
    </Card>
  );
};

KpiCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  gradient: PropTypes.string,
  loading: PropTypes.bool,
  count: PropTypes.number,
  total: PropTypes.number,
  // error: PropTypes.string, // What is the error type????
};

KpiCard.defaultProps = {
  title: "",
  color: colorAccent,
  gradient: colorAccent,
  loading: false,
  count: 0,
  total: 0,
  //   error: '',
};

export default KpiCard;

const KpiCardBody = styled(CardBody)`
  // padding: 20px 30px 25px;
  border: ${(props) => (props.border ? "1px solid green" : "")};
  .progress {
    margin-top: 20px;

    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const KpiCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const KpiCardTitle = styled.h5`
  direction: ltr;
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  color: ${(props) => props.color || colorAccent};
`;

const KpiCardDescription = styled.h5`
  text-align: ${left};
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  color: ${colorText};
  margin-top: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
