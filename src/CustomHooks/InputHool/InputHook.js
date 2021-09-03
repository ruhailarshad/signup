import { useReducer } from 'react';
import { inputStateReducer } from './ReducerFn';

const initialInputState = {
  value: '',
  isTouched: false,
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  console.log(inputState);
  const { isValid, error } = validateValue(inputState.value);

  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    error,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
