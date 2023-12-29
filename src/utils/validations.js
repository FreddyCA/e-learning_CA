const validations = (name, value, setErrors) => {
  if (name === "name" || name === "lastname") {
    if (!validateEmpty(value)) {
      return updateErrors(name, "No puede estar vacÍo", setErrors);
    }
    if (validateTexto(value)) {
      if (validateLength(value, 50)) {
        updateErrors(name, "No se admite más de 50 caracteres", setErrors);
        return;
      }
      updateErrors(name, true, setErrors);
    } else {
      updateErrors(name, "No se admite carácteres extraños", setErrors);
    }
  }

  if (name === "email") {
    if (!validateEmpty(value)) {
      return updateErrors(name, "No puede estar vacÍo", setErrors);
    }
    if (validateEmail(value)) {
      if (validateLength(value, 40)) {
        updateErrors(name, "No se admite más de 40 caracteres", setErrors);
        return;
      }
      updateErrors(name, true, setErrors);
    } else {
      updateErrors(name, "El correo no es válido", setErrors);
    }
  }

  if (name === "password") {
    if (!validateEmpty(value)) {
      return updateErrors(name, "No puede estar vacÍo", setErrors);
    }
    if (validatePassword(value)) {
      if (validateLength(value, 30)) {
        updateErrors(name, "No se admite más de 30 caracteres", setErrors);
        return;
      }
      updateErrors(name, true, setErrors);
    } else {
      updateErrors(
        name,
        "Debe tener al menos 8 caracteres, incluyendo una mayúscula, números, y uno de los caracteres: '_' o '-'.",
        setErrors
      );
    }
  }
};

const updateErrors = (name, errorMessage, setErrors) => {
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: errorMessage,
  }));
};

const validateTexto = (inputValue) => {
  const regex = /^[A-Za-z0-9À-ÿ\s@/,_.-]+$/;
  return regex.test(inputValue);
};
const validateEmail = (email) => {
  let emailRegex =
    /^[0-9a-zA-Z]+([0-9a-zA-Z ]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};
const validateLength = (inputValue, maxLength) => {
  return inputValue.length <= maxLength ? false : true;
};
const validateEmpty = (text) => {
  return text.trim() !== "";
};
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[-_])[A-Za-z0-9\-_]{8,}$/;
  return passwordRegex.test(password);
};

export default validations;
