export const CHANGE_THEME_TO_DARK = 'CHANGE_THEME_TO_DARK';
export const CHANGE_THEME_TO_LIGHT = 'CHANGE_THEME_TO_LIGHT';

export function changeThemeToDark() {
  localStorage.setItem('theme', JSON.stringify('dark'));
  return {
    type: CHANGE_THEME_TO_DARK,
  };
}

export function changeThemeToLight() {
  localStorage.setItem('theme', JSON.stringify('light'));
  return {
    type: CHANGE_THEME_TO_LIGHT,
  };
}
