import React from 'react';
import Form from './Form/Form';
import classes from './SignUp.module.css';
const SignUpForm = () => {
  return (
    <div className={classes.signupform}>
      <h1 className={classes['form-head']}>Sign Up</h1>

      <Form />
    </div>
  );
};
export default SignUpForm;
