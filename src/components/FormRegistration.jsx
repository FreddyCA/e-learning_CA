import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import passwordOffImg from "../assets/png/passwordOff.png";
import passwordOnImg from "../assets/png/passwordOn.png";
import validations from "../utils/validations";
import marcaCheck from "../assets/svg/marcaCheck.svg";

const FormRegistrationStyle = styled.div`
  background-color: rgb(28, 30, 83);
  padding: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormRegistrationText = styled.p`
  color: var(--color--textPrimary);

  ${(props) =>
    props.$principal &&
    css`
      font-weight: 500;
      font-size: 1.75rem;
    `}

  ${(props) =>
    props.$secondary &&
    css`
      font-weight: 300;
      font-size: 1rem;
    `}
  ${(props) =>
    props.$finally &&
    css`
      font-weight: 300;
      font-size: 0.9rem;
      margin: 0 auto;
    `}
`;

const FormRegStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const FormRegInput = styled.input`
  color: rgb(255, 255, 255, 0.9);
  width: 100%;
  background-color: rgb(18, 20, 73);
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 2px solid rgb(48, 50, 103);
  font-size: 1rem;
  margin-bottom: 0.7rem;

  &:focus {
    outline: none;
    color: rgb(255, 255, 255);
    background-color: rgb(38, 40, 103);
    border: 2px solid transparent;
    border-bottom: 2px solid rgb(50, 40, 220);
  }
  &::placeholder {
    color: rgb(255, 255, 255, 0.75);
    font-size: 0.775rem;
  }
`;
const FormRegError = styled.span`
  color: orange;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  padding: 0 1rem;
`;

const FormRegButton = styled.button`
  border: none;
  background-color: var(--color--btnPrimary);
  color: var(--color--textSecondary);
  font-weight: 700;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;
const FormRegPassword = styled.label`
  display: flex;
`;
const FormRegPasswordContent = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(48, 50, 103);
  border-radius: 8px;
  margin-bottom: 0.7rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(38, 40, 103);
  }
`;
const FormRegPasswordButton = styled.img`
  width: 24px;
  height: 24px;
`;

const initialForm = {
  name: "",
  email: "",
  password: "",
};
const initialErrors = {
  name: false,
  email: false,
  password: false,
};

const evaluateErrors = (errors, setStatusSubmit) => {
  const valuesState = Object.values(errors).every((value) => value === true);
  setStatusSubmit(valuesState);
};

const FormRegistration = () => {
  const [formData, setFormData] = useState(initialForm);
  const [statusPassword, setStatusPassword] = useState(true);
  const [errors, setErrors] = useState(initialErrors);
  const [statusSubmit, setStatusSubmit] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [succesForm, setSuccesForm] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validations(name, value, setErrors);
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setStatusPassword(!statusPassword);
  };

  const succesMsForm = () => {
    setSuccesForm(true);
    setTimeout(() => {
      setSuccesForm(false);
    }, 4000);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (statusSubmit) {
      console.log("enviando", formData);
      setLoadingForm(true);
      // setTimeout simula el envio del form
      setTimeout(() => {
        // cuando fue enviando con exito el form
        setFormData(initialForm);
        setLoadingForm(false);
        setErrors(initialErrors);
        succesMsForm();
      }, 5000);

      // aplicar la fetch
    }
  };

  useEffect(() => {
    evaluateErrors(errors, setStatusSubmit);
  }, [errors, statusSubmit]);

  return (
    <FormRegistrationStyle>
      <FormRegistrationText $principal>¡Regístrate!</FormRegistrationText>
      <FormRegistrationText $secondary>
        Prepárate para un futuro lleno de éxito
      </FormRegistrationText>

      <FormRegStyle onSubmit={submitForm} autoComplete="on">
        <FormRegInput
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          value={formData.name}
          autoComplete="off"
        />
        {errors.name && <FormRegError>{errors.name}</FormRegError>}
        <FormRegInput
          type="email"
          name="email"
          placeholder="Escribe tu Email"
          onChange={handleChange}
          value={formData.email}
          autoComplete="off"
        />
        {errors.email && <FormRegError>{errors.email}</FormRegError>}

        <FormRegPassword>
          <FormRegInput
            type={statusPassword ? "password" : "text"}
            name="password"
            placeholder="Escribe una contraseña"
            onChange={handleChange}
            value={formData.password}
            autoComplete="off"
          />
          {statusPassword ? (
            <FormRegPasswordContent onClick={handleTogglePassword}>
              <FormRegPasswordButton
                src={passwordOnImg}
                alt="icon password on"
              />
            </FormRegPasswordContent>
          ) : (
            <FormRegPasswordContent onClick={handleTogglePassword}>
              <FormRegPasswordButton
                src={passwordOffImg}
                alt="icon password off"
              />
            </FormRegPasswordContent>
          )}
        </FormRegPassword>
        {errors.password && <FormRegError>{errors.password}</FormRegError>}

        {loadingForm ? (
          <FormRegButton>Enviando...</FormRegButton>
        ) : (
          <FormRegButton type="submit">
            Enviar{" "}
            {statusSubmit && (
              <img
                src={marcaCheck}
                alt="icon se puede enviar"
                style={{ width: "14px" }}
              />
            )}
          </FormRegButton>
        )}

        {succesForm ? (
          <FormRegError>
            Para completar su registro revise su email
          </FormRegError>
        ) : (
          !statusSubmit && (
            <FormRegError>*Todos los campos son requeridos.</FormRegError>
          )
        )}
      </FormRegStyle>

      <FormRegistrationText $finally>
        ¿Ya tienes una cuenta? Iniciar sesión
      </FormRegistrationText>
    </FormRegistrationStyle>
  );
};

export default FormRegistration;
