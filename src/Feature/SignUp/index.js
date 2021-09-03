import React from 'react';
import SignUpForm from './SignUpForm/SignUp';
import classes from './CardDisplay.module.css';
import RightPanel from '../SignUp/RightPanel/index';
const CardDisplay = () => {
  return (
    <div className={classes.card}>
      <div className={classes.form}>
        <SignUpForm />
      </div>
      <div className={classes.right}>
        <RightPanel />
      </div>
    </div>
  );
};

export default CardDisplay;
