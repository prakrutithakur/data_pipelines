import {
  SEND_CONFIG_LOADING,
  SEND_CONFIG_SUCCESS,
  SEND_CONFIG_FAIL,
} from '@/shared/constants/formTypeConstants';

const initialState = {
  loading: false,
  info: '',
  error: '',
};

const sendConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_CONFIG_LOADING:
      return { ...state, loading: true };
    case SEND_CONFIG_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case SEND_CONFIG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sendConfigReducer;
