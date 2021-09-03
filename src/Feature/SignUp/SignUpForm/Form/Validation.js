const isCheck = (val, Reg, name) => {
  if (!val.length) {
    return {
      isValid: false,
      error: `${name} must not be empty.`,
    };
  } else if (!Reg.test(val)) {
    return {
      isValid: false,
      error: `Please Enter a Valid ${name}`,
    };
  }
  return {
    isValid: true,
    error: '',
  };
};

export const nameDesCheck = (val) => {
  const nameReg = /^[a-zA-Z ]+$/;
  return isCheck(val, nameReg, 'Field');
};
export const phoneCheck = (val) => {
  const Reg = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
  return isCheck(val, Reg, 'Phone Number');
};
export const emailCheck = (val) => {
  const Reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return isCheck(val, Reg, 'Email');
};
