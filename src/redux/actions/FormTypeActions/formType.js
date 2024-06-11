import { FORM_TYPE, SHOW_FORM_PANEL, MODULE_ID } from '@/shared/constants/formTypeConstants';

export const showFormPanel = (moduleId) => async (dispatch) => {
  if (moduleId) {
    dispatch({
      type: SHOW_FORM_PANEL,
      payload: {
        formType: moduleId.formType,
        showForm: moduleId.showForm,
        moduleId: moduleId.moduleId,
        tab: moduleId.tab,
      },
    });
  }
};

export const hideFormPanel = () => async (dispatch) => {
  dispatch({
    type: SHOW_FORM_PANEL,
    payload: { formType: null, showForm: false, moduleId: null, tab: 1 },
  });
};
