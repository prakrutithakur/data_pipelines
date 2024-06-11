import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

const AutoLogout = ({ children }) => {
  const dispatch = useDispatch();

  const events = ['load', 'click', 'keydown'];
  const token = localStorage.getItem('token');
  const { exp } = jwtDecode(token);

  const autolog = () => {
    if (token && exp && Date.now() >= exp * 1000 - 60000) {
      // dispatch(logout(true));
    }
  };

  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        autolog();
      });
    });
  }, []);

  return children;
};

export default AutoLogout;
