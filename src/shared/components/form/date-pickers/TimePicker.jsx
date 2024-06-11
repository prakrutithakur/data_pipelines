import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import TimePicker from 'rc-time-picker';
import styled from 'styled-components';
import { colorText } from '@/utils/palette';
import { renderComponentField } from '@/shared/components/form/FormField';
import range from 'lodash.range';

const TimePickerField = ({
  name,
  onChange,
  timeMode,
  theme,
  placeholderText,
  minuteSelected,
  secondSelected,
  value,
  fullDiagnosticForm,
  startminute,
  endminute,
  starthour,
  endhour,
  startdate,
  endate,
}) => {
  const [opened, setOpened] = useState(false);
  const hourEndVal = parseInt(endhour);
  const hourStartVal = parseInt(starthour);
  const minuteEndVal = parseInt(endminute);
  const minuteStartVal = parseInt(startminute);
  const sameDates =
    !fullDiagnosticForm && endate && startdate && endate.toDateString() === startdate.toDateString()
      ? true
      : false;
  const shouldDisable = fullDiagnosticForm
    ? false
    : name === 'time_duration_start' && startdate
    ? false
    : name === 'time_duration_end' && endate
    ? false
    : true;
  const now =
    name === 'time_duration_start' && endhour && endminute && sameDates
      ? moment()
          .hour(hourEndVal)
          .minute(minuteEndVal - 1)
          .second(0)
      : 'time_duration_end' && starthour && startminute && sameDates
      ? moment()
          .hour(hourStartVal)
          .minute(minuteStartVal + 1)
          .second(0)
      : moment().hour(0).minute(0).second(0);

  const header = () => {
    return <HeaderText>{fullDiagnosticForm ? 'MM : SS' : 'HH : MM'}</HeaderText>;
  };

  const disabledSecondsFullDiag = () => {
    if (minuteSelected === '15') {
      return range(1, 60);
    }
  };
  const disabledHourDownDiag = () => {
    if (!sameDates) {
      return undefined;
    }
    if (name === 'time_duration_start' && endhour) {
      // return range(0,hourEndVal-1)
      if (endminute <= startminute) {
        return range(hourEndVal, 24);
      }
      if (endminute > startminute) {
        return range(hourEndVal + 1, 24);
      }
    }
    if (name === 'time_duration_end' && starthour) {
      if (endminute <= startminute) {
        return range(0, hourStartVal + 1);
      }
      if (endminute > startminute) {
        return range(0, hourStartVal);
      }
    }
  };

  const disabledMinutesFullDiag = () => {
    const secondVal = parseInt(secondSelected);

    if (secondVal > 0) {
      return range(15, 60);
    } else {
      return range(16, 60);
    }
  };
  const disabledMinutesDownDiag = () => {
    if (!sameDates) {
      return undefined;
    }
    if (name === 'time_duration_start' && endminute && starthour) {
      if (endhour === starthour) {
        return range(minuteEndVal, 60);
      }
    }
    if (name === 'time_duration_start' && endminute && !starthour) {
      return range(minuteEndVal, 60);
    }
    if (name === 'time_duration_end' && startminute && endhour) {
      if (endhour === starthour) {
        return range(0, minuteStartVal + 1);
      }
    }
    if (name === 'time_duration_end' && startminute && !endhour) {
      return range(0, minuteStartVal + 1);
    }
  };

  return (
    <TimePicker
      open={opened}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      name={name}
      onChange={onChange}
      showSecond={fullDiagnosticForm !== undefined}
      popupClassName={theme === 'dark' ? 'dark' : 'light'}
      // use12Hours={timeMode}
      placeholder={placeholderText}
      defaultOpenValue={now}
      addon={header}
      showHour={!fullDiagnosticForm}
      allowEmpty
      disabledMinutes={fullDiagnosticForm ? disabledMinutesFullDiag : disabledMinutesDownDiag}
      disabledHours={disabledHourDownDiag}
      disabledSeconds={fullDiagnosticForm && disabledSecondsFullDiag}
      hideDisabledOptions={fullDiagnosticForm}
      value={typeof value === 'string' ? null : value}
      autoComplete="off"
      disabled={shouldDisable}
    />
  );
};

TimePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
  timeMode: PropTypes.bool,
  placeholder: PropTypes.string,
};

TimePickerField.defaultProps = {
  theme: 'light',
  timeMode: false,
};

export default renderComponentField(TimePickerField);

// region STYLES

const HeaderText = styled.div`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${colorText};
`;

// endregion
