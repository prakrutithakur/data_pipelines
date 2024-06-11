import { CHANGE_THEME_TO_DARK, CHANGE_THEME_TO_LIGHT } from '../actions/themeActions';

const getThemeValue = JSON.parse(localStorage.getItem('theme'));

const initialState = {
  className: getThemeValue ? getThemeValue : 'light',
};


const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_TO_DARK:
      return { className: 'dark' };
    case CHANGE_THEME_TO_LIGHT:
      return { className: 'light' };
    default:
      return state;
  }
};

export default themeReducer;
