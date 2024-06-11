import moment from 'moment';

/* eslint-disable */

export const loginValidate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email field shouldn’t be empty';
  } else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
      values.email
    )
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.mobilenumber) {
    errors.mobilenumber = 'Mobile Number field shouldn’t be empty';
  } else if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/im.test(values.mobilenumber)) {
    errors.mobilenumber = 'Invalid Mobile Number';
  }
  return errors;
};

export const signInValidate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email field shouldn’t be empty';
  } else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
      values.email
    )
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password field shouldn’t be empty';
  }
  // else if (
  //   !/^(?!\s+)(?!.*\s+$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$^*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])[A-Za-z0-9$^*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ]{8,256}$/g.test(
  //     values.password
  //   )
  // ) {
  //   errors.password = 'Invalid password';
  // }

  return errors;
};

export const resetPwdValidate = (values) => {
  const errors = {};
  if (!values.new_password) {
    errors.new_password = 'New password shouldn’t be empty';
  }
  if (!values.new_password_confirm) {
    errors.new_password_confirm = 'Password doesn’t match';
  } else if (values.new_password !== values.new_password_confirm) {
    errors.new_password_confirm = 'Password doesn’t match';
  }
  return errors;
};

export const forgotPwdValidate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email field shouldn’t be empty';
  } else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
      values.email
    )
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export const loginOtpValidate = (values) => {
  const errors = {};
  if (!values.otpemail) {
    errors.otpemail = 'Email OTP field shouldn’t be empty';
  } else if (!/\b\d{5}\b/g.test(values.otpemail)) {
    errors.otpemail = 'Invalid Email OTP';
  }
  if (!values.otpmobile) {
    errors.otpmobile = 'Mobile OTP field shouldn’t be empty';
  } else if (!/\b\d{5}\b/g.test(values.otpmobile)) {
    errors.otpmobile = 'Invalid Mobile OTP';
  }
  return errors;
};

export const vinValidate = (values) => {
  const errors = {};
  if (!values.vin) {
    errors.vin = 'Vin shouldn’t be empty';
  } else if (!/^[a-zA-Z0-9]{17,17}$/g.test(values.vin)) {
    errors.vin = 'Vin must be 17 alphanumeric characters long';
  }
  return errors;
};

export const vehicleRegisterationValidate = (values) => {
  const errors = {};
  if (!values.vin) {
    errors.vin = 'Vin Number shouldn’t be empty';
  } else if (!/^[a-zA-Z0-9]{17,17}$/g.test(values.vin)) {
    errors.vin = 'Vin must be 17 alphanumeric characters long';
  }
  if (!values.body_number) {
  } else if (!/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/g.test(values.body_number)) {
    errors.body_number = 'Invalid Body Number';
  }
  if (!values.manufacturer) {
  } else if (!/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/g.test(values.manufacturer)) {
    errors.manufacturer = 'Invalid Manufacturer';
  }
  if (!values.model) {
  } else if (!/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/g.test(values.model)) {
    errors.model = 'Invalid Model';
  }
  if (!values.bus_num) {
  } else if (!/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/g.test(values.bus_number)) {
    errors.bus_number = 'Invalid Bus Number';
  }
  if (!values.plate_num) {
  } else if (!/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/g.test(values.plate_number)) {
    errors.plate_number = 'Invalid Plate Number';
  }
  if (!values.engine_type) {
    errors.engine_type = 'Please select an option';
  }
  return errors;
};

export const vehicleRegisterationValidatePartTwo = (values) => {
  const errors = {};

  if (!values.operator_name) {
    errors.operator_name = 'Please select an option';
  }
  if (!values.fleet_name) {
    errors.fleet_name = 'Please select an option';
  }
  if (!values.depot_name) {
    errors.depot_name = 'Please select an option';
  }
  return errors;
};

export const gatewayRegisterationValidate = (values) => {
  const errors = {};
  if (!values.gateway) {
    errors.gateway = 'Please enter gateway serial number';
  } else if (!/^[a-zA-Z0-9]+([-.]?[a-zA-Z0-9]+)*$/g.test(values.gateway)) {
    errors.gateway = 'Invalid gateway serial number';
  }
  return errors;
};

//Validation for company registeration form
export const registerCompanyValidate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Please enter company name';
  } else if (!/^(?![:&,. -]|.*([:&,. -])\1)[\w:&,. -]+(?<![:&,. -])$/g.test(values.name)) {
    errors.name = 'Please enter a valid company name';
  }
  if (!values.website) {
    errors.website = 'Please enter website name';
  } else if (
    !/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/g.test(
      values.website
    )
  ) {
    errors.website = 'Invalid website name';
  }
  if (!values.city) {
    errors.city = 'Please enter city name';
  } else if (!/^[A-Za-z\s]+$/g.test(values.city)) {
    errors.city = 'Invalid city name';
  }
  if (!values.country) {
    errors.country = 'Please enter country name';
  } else if (!/^[A-Za-z\s]+$/g.test(values.country)) {
    errors.country = 'Invalid country name';
  }
  if (!values.description) {
    errors.description = 'Please enter description name';
  } else if (!/^(?![:&,. -]|.*([:&,. -])\1)[\w:&,. -]+(?<![:&,. -])$/g.test(values.description)) {
    errors.description = 'Invalid description';
  }
  if (!values.company_type) {
    errors.company_type = 'Please select an option';
  }
  return errors;
};

//Validation for buisness relation form
export const registerBusinessRelationValidate = (values) => {
  const errors = {};
  if (!values.pta) {
    // errors.pta = 'Please select an option';
  }
  if (!values.pto) {
    // errors.pto = 'Please select an option';
  }
  if (!values.serviceprovider) {
    // errors.serviceprovider = 'Please select an option';
  }
  return errors;
};

//Validation for selecting company
export const selectCompanyValidate = (values) => {
  const errors = {};
  if (!values.company) {
    errors.company = 'Please select a company';
  }
  return errors;
};

//Validation for registering fleet
export const registerFleetValidate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Please enter fleet name';
  } else if (!/^(?![:&,. -]|.*([:&,. -])\1)[\w:&,. -]+(?<![:&,. -])$/g.test(values.name)) {
    errors.name = 'Invalid fleet name';
  }
  if (!values.region) {
    errors.region = 'Please enter region';
  } else if (!/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/g.test(values.region)) {
    errors.region = 'Invalid region';
  }
  if (!values.description) {
    errors.description = 'Please enter description name';
  } else if (!/^(?![:&,. -]|.*([:&,. -])\1)[\w:&,. -]+(?<![:&,. -])$/g.test(values.description)) {
    errors.description = 'Invalid description';
  }
  if (!values.climateZone) {
    errors.climateZone = 'Please select a climate zone';
  }
  return errors;
};

//Validation for selecting fleet
export const selectFleetValidate = (values) => {
  const errors = {};
  if (!values.fleet) {
    errors.fleet = 'Please select a fleet';
  }
  return errors;
};

//Validation for registering depot
export const registerDepotValidate = (values) => {
  const errors = {};
  if (!values.fleet_name) {
    errors.fleet_name = 'Please select a fleet';
  }
  if (!values.name) {
    errors.name = 'Please enter depot name';
  } else if (!/^(?![:&,. -]|.*([:&,. -])\1)[\w:&,. -]+(?<![:&,. -])$/g.test(values.name)) {
    errors.name = 'Invalid depot name';
  }
  if (!values.address) {
    errors.address = 'Please enter address';
  } else if (!/^(?![:&,. -]|.*([:&,. -])\1)[\w:&,. -]+(?<![:&,. -])$/g.test(values.address)) {
    errors.address = 'Invalid address';
  }
  if (!values.city) {
    errors.city = 'Please enter city name';
  } else if (!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/g.test(values.city)) {
    errors.city = 'Invalid city name';
  }
  if (!values.country) {
    errors.country = 'Please enter country name';
  } else if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/g.test(values.country)) {
    errors.country = 'Invalid country name';
  }
  if (!values.lat) {
    errors.lat = 'Please enter latitude';
  } else if (!/^-?([1-8]?[0-9](\.\d+)?|90(\.0+)?)$/g.test(values.lat)) {
    errors.lat = 'Invalid latitude';
  }
  if (!values.long) {
    errors.long = 'Please enter longitude';
  } else if (!/^-?([1-9]?[0-9](\.\d+)?|1[0-7][0-9](\.\d+)?|180(\.0+)?)$/g.test(values.long)) {
    errors.long = 'Invalid longitude';
  }
  return errors;
};

//Validation for selecting depot
export const selectDepotValidate = (values) => {
  const errors = {};
  if (!values.fleet) {
    errors.fleet = 'Please select a fleet';
  }
  if (!values.depot) {
    errors.depot = 'Please select a depot';
  }
  return errors;
};

//Validation for registering user
export const registerUserValidate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Please select a username';
  } else if (!/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/g.test(values.username)) {
    errors.username = 'Invalid username';
  }
  if (!values.email) {
    errors.email = 'Please enter email address';
  } else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
      values.email
    )
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.contact) {
    // errors.contact = 'Please enter mobile number';
  } else if (
    !/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/g.test(
      values.contact
    )
  ) {
    errors.contact = 'Invalid mobile number';
  }
  if (!values.designation) {
    // errors.designation = 'Please enter designation';
  } else if (!/^(?![:&,. -]|.*([:&,. -])\1)[\w:&,. -]+(?<![:&,. -])$/g.test(values.designation)) {
    errors.designation = 'Invalid designation';
  }
  if (!values.role) {
    errors.role = 'Please select a role';
  }
  return errors;
};

//Validation for selecting user
export const selectUserValidate = (values) => {
  const errors = {};
  if (!values.user) {
    errors.user = 'Please select an user';
  }
  return errors;
};

//Validation for Download Diagnostic
export const dowloadDiagnostic = (values) => {
  const errors = {};
  if (!values.start_time) {
    errors.start_time = 'Please select start date and time';
  }
  if (!values.end_time) {
    errors.end_time = 'Please select end date and time';
  }
  if (!values.signals) {
    errors.signals = 'Please select signals';
  }
  return errors;
};

// Validation for Full Diagnostic form
export const validateFullDiagnosticForm = (values) => {
  const errors = {};
  if (!values.time_duration) {
    errors.time_duration = 'Please select start date and time';
  }
  const k = moment(values.time_duration);
  if (k.format('mm:ss') == '00:00') {
    errors.time_duration = 'Please select a Valid time';
  }
  return errors;
};

//Add HVAC
// export const addHvacValidation = (values) => {
//   const errors = {};
//   if (!values.manufacture) {
//     errors.manufacture = 'Please select a manufacture';
//   }
//   if (!values.serial_number) {
//     errors.serial_number = 'Please enter a serial number';
//   } else if (values.serial_number.length > 9) {
//     errors.serial_number = 'Serial number cannot be more than 9 digits';
//   } else if (values.serial_number.length < 4) {
//     errors.serial_number = 'Serial number cannot be less than 4 digits';
//   }
//   // if (!values.select_components) {
//   //   errors.select_components = 'Please select a component';
//   // }
//   return errors;
// };

//Validation for Gateway details
export const gatewayDetails = (values) => {
  const errors = {};
  if (!values.serial_number) {
    errors.serial_number = 'Please enter gateway serial number';
  } else if (!/^[a-zA-Z0-9]+([-.]?[a-zA-Z0-9]+)*$/g.test(values.serial_number)) {
    errors.serial_number = 'Invalid gateway serial number';
  }
  if (!values.cpu_number) {
    errors.cpu_number = 'Please enter gateway cpu number';
  } else if (!/^[a-zA-Z0-9]+([-.]?[a-zA-Z0-9]+)*$/g.test(values.cpu_number)) {
    errors.cpu_number = 'Invalid gateway cpu number';
  }
  if (!values.manufacturer) {
    errors.manufacturer = 'Please select a manufacturer';
  }
  return errors;
};

//Validation for Sim details
export const simDetails = (values) => {
  const errors = {};
  if (!values.sim_number) {
    errors.sim_number = 'Please enter sim number';
  } else if (!/^[a-zA-Z0-9]+([-.]?[a-zA-Z0-9]+)*$/g.test(values.sim_number)) {
    errors.sim_number = 'Invalid sim number';
  }
  if (!values.imei_number) {
    errors.imei_number = 'Please enter imei';
  } else if (!/^[a-zA-Z0-9]+([-.]?[a-zA-Z0-9]+)*$/g.test(values.imei_number)) {
    errors.imei_number = 'Invalid imei number';
  }
  if (!/^[a-zA-Z0-9]+$/g.test(values.country)) {
    errors.country = 'Invalid country';
  }
  if (!/^[a-zA-Z0-9]+$/g.test(values.country_code)) {
    errors.country_code = 'Invalid country code';
  }
  if (!/^[a-zA-Z0-9]+$/g.test(values.operator)) {
    errors.operator = 'Invalid operator';
  }
  return errors;
};

//Validation for Preventive Maintenance
export const preventiveMainValidation = (values) => {
  const errors = {};

  if (values.mode && !values.mode.value) {
    errors.mode = 'Please select a mode';
  }

  if (values.mode && values.mode.value && values.mode.value === 'operating_hours') {
    delete errors.level_a;
    delete errors.level_b;
    delete errors.level_c;
    delete errors.level_d;
    delete errors.level_e;

    if (!values.level_a) {
      errors.level_a = 'Level A cannot be empty';
    } else if (!/^[0-9]+$/g.test(values.level_a)) {
      errors.level_a = 'Invalid Hours';
    }
    if (!values.level_b) {
      errors.level_b = 'Level B cannot be empty';
    } else if (!/^[0-9]+$/g.test(values.level_b)) {
      errors.level_b = 'Invalid Hours';
    }
    if (!values.level_c) {
      errors.level_c = 'Level C cannot be empty';
    } else if (!/^[0-9]+$/g.test(values.level_c)) {
      errors.level_c = 'Invalid Hours';
    }
    if (!values.level_d) {
      errors.level_d = 'Level D cannot be empty';
    } else if (!/^[0-9]+$/g.test(values.level_d)) {
      errors.level_d = 'Invalid Hours';
    }
    if (!values.level_e) {
      errors.level_e = 'Level E cannot be empty';
    } else if (!/^[0-9]+$/g.test(values.level_e)) {
      errors.level_e = 'Invalid Hours';
    }
  }
  if (values.mode && values.mode.value && values.mode.value === 'time_period_days') {
    delete errors.level_a;
    delete errors.level_b;
    delete errors.level_c;
    delete errors.level_d;
    delete errors.level_e;

    if (!values.level_a) {
      errors.level_a = 'Level A cannot be empty';
    }
    if (!values.level_b) {
      errors.level_b = 'Level B cannot be empty';
    }
    if (!values.level_c) {
      errors.level_c = 'Level C cannot be empty';
    }
    if (!values.level_d) {
      errors.level_d = 'Level D cannot be empty';
    }
    if (!values.level_e) {
      errors.level_e = 'Level E cannot be empty';
    }
  }

  return errors;
};

export const alarmModalTableValidate = (values) => {
  const errors = {};
  const keys = Object.keys(values);
  if (keys.length) {
    for (let i = 0; i < keys.length; i++) {
      const count = values[keys[i]].length;
      if (count >= 1000) {
        errors[keys[i]] = 'Maximum 1000 characters allowed';
      }
    }
  }
  return errors;
};
//Tag on vehicle dashboard
// export const tagValidate = (values) => {
//   const errors = {};
//   if (!values.multiselect) {
//     errors.multiselect = 'Please add a ';
//   }
//   return errors;
// };
