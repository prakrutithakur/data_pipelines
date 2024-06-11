import axios from 'axios';
import {
  CREATE_USER_LOADING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from '@/shared/constants/formTypeConstants';
import { getConfig } from '@/shared/helpers/apiConfig';
import { jwtDecode } from 'jwt-decode';

const createUser = () => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_USER_LOADING,
    });

    const decodeToken = jwtDecode(localStorage.getItem('token'));
    const userId = decodeToken.id;
    const email_id = decodeToken.email;

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
      user_id: userId,
      organization_id: 'locate_devices',
      email_id: email_id,
      access_token: localStorage.getItem('token'),
      id_token: localStorage.getItem('token'),
      refresh_token: localStorage.getItem('token'),
    });
    localStorage.setItem('userRegistered', 'USER EXISTS');
    dispatch({
      type: CREATE_USER_SUCCESS,
      // payload: response.data,
    });
    return response.data;
  } catch (error) {
    if (error.response === undefined) {
      dispatch({
        type: CREATE_USER_FAIL,
        payload: 'network error',
      });
    } else {
      dispatch({
        type: CREATE_USER_FAIL,
        payload: error.response,
      });
    }
  }
};

export default createUser;
