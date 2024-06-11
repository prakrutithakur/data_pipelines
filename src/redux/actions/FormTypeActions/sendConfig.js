import axios from 'axios';
import {
  SEND_CONFIG_LOADING,
  SEND_CONFIG_SUCCESS,
  SEND_CONFIG_FAIL,
} from '@/shared/constants/formTypeConstants';
import { getConfig } from '@/shared/helpers/apiConfig';
import { jwtDecode } from 'jwt-decode';

const sendConfig = (values) => async (dispatch) => {
  try {
    dispatch({
      type: SEND_CONFIG_LOADING,
    });

    const { device_name, device_id, device_protocol, connection_type } = values;
    const decodeToken = jwtDecode(localStorage.getItem('token'));
    const userId = decodeToken.id;

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/devices`, {
      user_id: userId,
      name: device_name,
      id: device_id,
      connection_type: connection_type.value,
      communication_protocol: device_protocol,
    });
    localStorage.setItem('formResponse', JSON.stringify(response?.data));
    localStorage.setItem('status', true);
    dispatch({
      type: SEND_CONFIG_SUCCESS,
      // payload: response.data,
    });
    return response;
  } catch (error) {
    if (error.response === undefined) {
      dispatch({
        type: SEND_CONFIG_FAIL,
        payload: 'network error',
      });
    } else {
      dispatch({
        type: SEND_CONFIG_FAIL,
        payload: error.response,
      });
    }
  }
};

export default sendConfig;
