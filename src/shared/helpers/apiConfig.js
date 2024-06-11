import axios from 'axios';

export const getConfig = () => {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common['Authorization'];
};
