import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Card, CardBody } from "@/shared/components/Card";
import { colorAccent, colorText } from "@/utils/palette";

const KpiCard = ({
  title,
  color,
  loading,
  data,
  img,
  imgtext,
  manualHeight,
}) => {
  return (
    <Card style={{ paddingBottom: 0, minHeight: "10vh" }}>
      <KpiCardBody>
        <KpiCardDescription>{title}</KpiCardDescription>
        <KpiCardWrap>
          <KpiCardTitle color={color}>{data}</KpiCardTitle>
        </KpiCardWrap>
      </KpiCardBody>
    </Card>
  );
};

KpiCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  loading: PropTypes.bool,
};

KpiCard.defaultProps = {
  title: "",
  color: colorAccent,
  loading: false,
};

export default KpiCard;

const KpiCardBody = styled(CardBody)`
  // padding: 20px 30px 25px;

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
  text-align: left;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  color: ${colorText};
  margin-top: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const KpiImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 50%;
`;
const KpiImageText = styled.p`
  font-size: 15px;
  font-weight: 500;
  // text-transform: uppercase;
  padding-left: 10px;
  color: ${(props) => props.color || colorAccent};
`;

const KpiCardImg = styled.img`
  width: 30px;
  height: 30px;
`;
