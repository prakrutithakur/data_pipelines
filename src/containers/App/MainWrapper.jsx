import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// const direction = (location, rtl) => (location.pathname === '/' ? 'ltr' : rtl.direction);

const MainWrapper = ({ children }) => {
  const rtl = useSelector((state) => state.rtl);

  return (
    <Fragment>
      {/* <div className={`${direction(location, rtl)}-support`} dir={direction(location, rtl)}> */}
      <div className="wrapper">{children}</div>
      {/* </div> */}
    </Fragment>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
