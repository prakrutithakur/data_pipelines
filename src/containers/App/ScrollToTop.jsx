import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ScrollToTop = ({ children, location }) => {
  // useEffect(() => {
  //   if (location && location.pathname) {
  //     window.scrollTo(0, 0);
  //   }
  // }, [location]);
  return children;
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollToTop;
