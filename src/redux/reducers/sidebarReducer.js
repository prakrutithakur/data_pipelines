import {
  CHANGE_SIDEBAR_VISIBILITY,
  CHANGE_MOBILE_SIDEBAR_VISIBILITY,
} from '../actions/sidebarActions';

const initialState = {
  show: false,
  collapse: true,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SIDEBAR_VISIBILITY:
      return { ...state, collapse: !state.collapse };
    case CHANGE_MOBILE_SIDEBAR_VISIBILITY:
      return { ...state, show: !state.show };
    default:
      return state;
  }
};

export default sidebarReducer;
