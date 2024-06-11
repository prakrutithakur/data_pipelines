import { FORM_TYPE, SHOW_FORM_PANEL, MODULE_ID } from '@/shared/constants/formTypeConstants';

const initialState = {
  panelState: { formType: null, showForm: false, moduleId: null, tab: 1 },
};
const formTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM_PANEL:
      return {
        ...state,
        panelState: action.payload,
      };
    default:
      return state;
  }
};

export default formTypeReducer;
