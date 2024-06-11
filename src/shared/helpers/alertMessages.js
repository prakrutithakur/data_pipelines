import { showNotification } from '../components/Notification';

export const successMessage = (message) => {
  return showNotification({}, 'success', {}, 'Success', message);
};

export const errorMessage = (heading, message) => {
  return showNotification({}, 'danger', {}, heading, message);
};

export const objectErrors = (error) => {
  const myFields = Object.keys(error.extra.fields);
  const myValues = Object.values(error.extra.fields);
  var errorBody = [];
  for (let i = 0; i < myFields.length; i++) {
    errorBody.push(myValues[i]);
  }
  return error.extra ? errorMessage(error.message, errorBody) : errorMessage(error.message, '');
};

export const errorFunction = (error) => {
  if ('extra' in error) {
    if (Array.isArray(error.extra.fields)) {
      errorMessage(error.message, error.extra.fields);
    } else {
      objectErrors(error);
    }
  } else if (error.message) {
    errorMessage('Error', error.message);
  } else {
    errorMessage('Error', 'Something went wrong!');
  }
};
