import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form } from 'react-final-form';
import { Button } from '@/shared/components/Button';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import FormField from '@/shared/components/form/FormField';
import renderSelectField from '@/shared/components/form/Select';
import RadioButton from '@/shared/components/form/RadioButton';
import DotDotLoader from '@/shared/components/DotDotLoader';
import sendConfig from '../../../../redux/actions/FormTypeActions/sendConfig';

const FormOne = ({ setActivekey }) => {
  const dispatch = useDispatch();
  const loading = false;
  const [advanceConfig, setAdvanceConfig] = useState(false);

  const handleUpdateUserProfile = (values, form) => {
    if (Object.keys(values).length > 0) {
      dispatch(sendConfig(values)).then((res) => {
        if (res?.status === 200) {
          setActivekey(2);
          localStorage.setItem('initialValues', JSON.stringify(values));
          // form.restart();
        }
      });
    }
  };

  const deviceType = [
    {
      id: 1,
      value: 'nats',
      label: 'NATS',
    },
    {
      id: 2,
      value: 'mqtt',
      label: 'MQTT',
    },
    {
      id: 3,
      value: 'tcp_socket',
      label: 'TCP SOCKET',
    },
  ];
  const radioValues = ['Yes', 'No'];

  const handleAdvanceConfig = (e) => {
    if (e) {
      setAdvanceConfig((prev) => !prev);
    }
    if (!e) {
      setAdvanceConfig((prev) => !prev);
    }
  };

  const localInitialVals = JSON.parse(localStorage.getItem('initialValues'));
  console.log('asdasd', localInitialVals);

  return (
    <Form onSubmit={handleUpdateUserProfile} initialValues={localInitialVals}>
      {({ handleSubmit, pristine, hasValidationErrors, form }) => (
        <FormContainer onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <FormGroupLabel>Your Device Name</FormGroupLabel>
            <FormGroupField>
              <Field
                name="device_name"
                component={FormField}
                type="text"
                placeholder="Please your device name"
                required
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Your Device Protocol</FormGroupLabel>
            <FormGroupField>
              <Field
                name="device_protocol"
                component={FormField}
                type="text"
                placeholder="Please your device protocol"
                required
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Your Device Id</FormGroupLabel>
            <FormGroupField>
              <Field
                name="device_id"
                component={FormField}
                type="text"
                placeholder="Please your device id"
                required
              />
            </FormGroupField>
          </FormGroup>

          <FormGroup>
            <FormGroupLabel>Connection type that your device supports</FormGroupLabel>
            <FormGroupField>
              <Field
                name="connection_type"
                component={renderSelectField}
                type="text"
                placeholder="Please select connection type"
                options={deviceType}
                required
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Does your device support encryption (TLS)</FormGroupLabel>
            <FormGroupField>
              <Field
                name="device_support"
                render={RadioButton}
                label="Yes"
                radioValue={radioValues[0]}
                value={radioValues[0]}
              />
              <Field
                name="device_support"
                render={RadioButton}
                label="No"
                radioValue={radioValues[1]}
                value={radioValues[1]}
                initialValue={radioValues[1]}
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Advance configurations</FormGroupLabel>
            <FormGroupField>
              <Field
                name="advance_config"
                render={RadioButton}
                label="Yes"
                radioValue={radioValues[0]}
                value={radioValues[0]}
                parse={(e) => {
                  handleAdvanceConfig(e, form);
                  return e;
                }}
              />
              <Field
                name="advance_config"
                render={RadioButton}
                label="No"
                radioValue={radioValues[1]}
                value={radioValues[1]}
                parse={(e) => {
                  handleAdvanceConfig(e, form);
                  return e;
                }}
                initialValue={radioValues[1]}
              />
            </FormGroupField>
            {advanceConfig && (
              <FormGroupField>
                <Field
                  name="configurations"
                  component={FormField}
                  type="text"
                  placeholder="config"
                />
              </FormGroupField>
            )}
          </FormGroup>
          <FormButtonToolbar
            style={{
              width: '100%',
              marginTop: '0',
              paddingTop: '20px',
            }}
          >
            <Button
              variant="primary"
              type="submit"
              disabled={pristine || hasValidationErrors || loading}
            >
              Submit
            </Button>
            <Button variant="secondary">Cancel</Button>
          </FormButtonToolbar>
        </FormContainer>
      )}
    </Form>
  );
};

export default FormOne;
