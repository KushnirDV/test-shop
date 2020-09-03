import React, { useRef } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['name', 'surname', 'address', 'phone'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.phone &&
    !/^\+?\(?[0-9](\s|\S)?[0-9](\s|\S)?\)?(\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9]/.test(
      values.phone
    )
  ) {
    errors.phone = 'Invalid number, must be 10 digits';
  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    variant="outlined"
    {...input}
    {...custom}
  />
);

const MaterialUiForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  let nameInput = useRef(null);
  let surnameInput = useRef(null);
  let addressInput = useRef(null);
  let phoneInput = useRef(null);

  const handleSubmitWrap = (data) => {
    handleSubmit(data);
    nameInput.current.value = '';
    surnameInput.current.value = '';
    addressInput.current.value = '';
    phoneInput.current.value = '';
  };

  return (
    <form onSubmit={handleSubmitWrap}>
      <div>
        <Field
          name="name"
          component={renderTextField}
          label="NAME"
          inputRef={nameInput}
        />
      </div>
      <div>
        <Field
          name="surname"
          component={renderTextField}
          label="SURNAME"
          inputRef={surnameInput}
        />
      </div>
      <div>
        <Field
          name="address"
          component={renderTextField}
          label="ADDRESS"
          inputRef={addressInput}
        />
      </div>
      <div>
        <Field
          name="phone"
          type="number"
          component={renderTextField}
          label="PHONE"
          inputRef={phoneInput}
        />
      </div>
      <div className="wd100">
        <Button
          className="wd100"
          variant="contained"
          type="submit"
          disabled={pristine || submitting}
        >
          ORDER
        </Button>
      </div>
    </form>
  );
};

MaterialUiForm.displayName = 'MaterialUiForm';
MaterialUiForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'MaterialUiForm',
  validate,
})(MaterialUiForm);
