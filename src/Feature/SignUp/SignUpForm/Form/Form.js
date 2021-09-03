import React from 'react';

import { emailCheck, nameDesCheck, phoneCheck } from './Validation';
import classes from './Form.module.css';
import useInput from '../../../../CustomHooks/InputHool/InputHook';

const Form = () => {
  const {
    value: fullNameValue,
    isValid: fullNameValidate,
    hasError: fullNameError,
    error: nameErrorMessage,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: nameReset,
  } = useInput(nameDesCheck);
  const {
    value: designationValue,

    isValid: designationValidate,
    hasError: designationError,
    error: designationErrorMessage,
    valueChangeHandler: designationChangeHandler,
    inputBlurHandler: designationBlurHandler,
    reset: desReset,
  } = useInput(nameDesCheck);
  const {
    value: phoneValue,
    isValid: phoneValidate,
    hasError: phoneError,
    error: phoneErrorMessage,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useInput(phoneCheck);
  const {
    value: emailValue,
    isValid: emailValidate,
    hasError: emailError,
    error: emailErrorMessage,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(emailCheck);

  let formIsValid = false;

  if (
    fullNameValidate &&
    designationValidate &&
    emailValidate &&
    phoneValidate
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(fullNameValue, designationValue, phoneValue, emailValue);

    nameReset();
    desReset();
    phoneReset();
    emailReset();
  };

  const renderFormInput = () => {
    return (
      <form onSubmit={submitHandler} className={classes.form}>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          value={fullNameValue}
          onChange={fullNameChangeHandler}
          onBlur={fullNameBlurHandler}
        />
        {fullNameError && (
          <p className={classes['error-text']}>{nameErrorMessage}.</p>
        )}
        <input
          type="text"
          id="designation"
          placeholder="You are a: Dev, Freelancer, Businessman"
          value={designationValue}
          onChange={designationChangeHandler}
          onBlur={designationBlurHandler}
        />
        {designationError && (
          <p className={classes['error-text']}>{designationErrorMessage}.</p>
        )}
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          value={phoneValue}
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
        />
        {phoneError && (
          <p className={classes['error-text']}>{phoneErrorMessage}.</p>
        )}
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && (
          <p className={classes['error-text']}>{emailErrorMessage}.</p>
        )}

        <button className={classes.button} type="submit">
          Join the wait list
        </button>
      </form>
    );
  };
  return <React.Fragment>{renderFormInput()}</React.Fragment>;
};

export default Form;
