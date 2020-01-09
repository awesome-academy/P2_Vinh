export const checkValidateRegisterForm = (
  users,
  setFirstNameErr,
  setLastNameErr,
  setEmailErr,
  setPasswordErr,
  setPasswordAgainErr
) => {
  if (
    users.firstName === "" ||
    users.firstName === null ||
    users.firstName === undefined
  ) {
    setFirstNameErr(true);
  } else {
    setFirstNameErr(false);
  }

  if (
    users.lastName === "" ||
    users.lastName === null ||
    users.lastName === undefined
  ) {
    setLastNameErr(true);
  } else {
    setLastNameErr(false);
  }

  if (users.email === "" || users.email === null || users.email === undefined) {
    setEmailErr(true);
  } else {
    setEmailErr(false);
  }

  if (
    users.password === "" ||
    users.password === null ||
    users.password === undefined
  ) {
    setPasswordErr(true);
  } else {
    setPasswordErr(false);
  }

  if (
    users.passwordAgain === "" ||
    users.passwordAgain === null ||
    users.passwordAgain === undefined
  ) {
    setPasswordAgainErr(true);
  } else {
    setPasswordAgainErr(false);

    if (users.password !== users.passwordAgain) {
      setPasswordAgainErr(true);
      return "Mật khẩu không trùng khớp";
    } else {
      setPasswordAgainErr(false);
      return "Đăng ký thành công";
    }
  }
};

export const checkValidateLoginForm = (users, setEmailErr, setPasswordErr) => {
  if (users.email === "" || users.email === null || users.email === undefined) {
    setEmailErr(true);
  } else {
    setEmailErr(false);
  }

  if (
    users.password === "" ||
    users.password === null ||
    users.password === undefined
  ) {
    setPasswordErr(true);
  } else {
    setPasswordErr(false);
  }
};
