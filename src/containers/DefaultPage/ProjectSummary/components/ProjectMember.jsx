import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorAdditional, colorBorder } from '@/utils/palette';
import { right, marginRight, left } from '@/utils/directions';

const ProjectMember = ({ 
  img, assettype, totalnumber, link, 
}) => (
  <ProjectMemberWrap as={Link} to={link}>
    <ProjectMemberAvatarWrap>
      <img src={img} alt="" />
    </ProjectMemberAvatarWrap>
    <div>
      <ProjectMemberName>{assettype}</ProjectMemberName>
      <ProjectMemberPost>{totalnumber}</ProjectMemberPost>
    </div>
    <ProjectMemberLink>
      {/* // as={Link}
    // to={link}
    // > */}
      <span className="lnr lnr-chevron-right" />
    </ProjectMemberLink>
  </ProjectMemberWrap>
);

ProjectMember.propTypes = {
  img: PropTypes.string.isRequired,
  assettype: PropTypes.string.isRequired,
  totalnumber: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ProjectMember.defaultProps = {
  totalnumber: '0',
};

export default ProjectMember;

// region STYLES

const ProjectMemberWrap = styled.div`
  display: flex;
  position: relative;
  padding: 10px 0;
  text-align: ${left};
  border-bottom: 1px solid ${colorBorder};

  &:last-child {
    border-bottom: none;
  }
`;

const ProjectMemberLink = styled.div`
  margin-top: 3px;
  position: absolute;
  ${right}: 0;
  padding: 5px 10px;
  line-height: 16px;

  // svg {
  //   ${marginRight}: 0;
  //   margin-top: 2px;
  //   height: 16px;
  //   width: 16px;
  // }
`;

const ProjectMemberAvatarWrap = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  ${marginRight}: 10px;

  img {
    height: 100%;
    min-width: 100%;
  }
`;

const ProjectMemberName = styled.p`
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 3px;
`;

const ProjectMemberPost = styled.p`
  color: ${colorAdditional};
  line-height: 15px;
  font-size: 11px;
  margin: 0;

  @media (max-width: 1100px) and (min-width: 990px) {
    font-size: 10px;
  }
`;

// endregion
