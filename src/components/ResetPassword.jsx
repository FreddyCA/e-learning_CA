import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styled, { css } from "styled-components";
import validations from "../utils/validations";
import marcaCheck from "../assets/svg/marcaCheck.svg";
import { useAuth } from "../firebase/Auth";
import LinkContent from "./LinkContent";
import ButtonPrimary from "./ButtonPrimary";

const ResetPasswordStyle = styled.div`
  background-color: rgb(28, 30, 83);
  padding: 3rem;
  width: 700px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResetPasswordText = styled.p`
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
    props.$password &&
    css`
      font-weight: 300;
      font-size: 0.875rem;
      margin: 0 auto;
      cursor: pointer;
      text-decoration: underline;
    `}
  ${(props) =>
    props.$finally &&
    css`
      font-weight: 300;
      font-size: 0.9rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      border-top: 4px solid #004080;
      padding: 1rem 0 0;
      width: 100%;
      margin-top: 1rem;
    `}
`;

const FormCntStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const FormCntInput = styled.input`
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
const FormCntError = styled.span`
  color: orange;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  padding: 0 1rem;
`;

const FormCntButton = styled.button`
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

const initialForm = {
  email: "",
};
const initialErrors = {
  email: false,
};

const evaluateErrors = (errors, setStatusSubmit) => {
  const valuesState = Object.values(errors).every((value) => value === true);
  setStatusSubmit(valuesState);
};

const ResetPassword = ({ setResetPasswordState }) => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [statusSubmit, setStatusSubmit] = useState(false);

  const [messageError, setMessageError] = useState("");

  // constrolando el estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validations(name, value, setErrors);
  };

  //   obteniendo el login
  const { resetPassword } = useAuth();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (statusSubmit) {
      try {
        await resetPassword(formData.email);
        setMessageError(
          "Revise su correo electrónico y restablezca su contraseña"
        );
        setFormData(initialForm)
      } catch (error) {
        setMessageError(error.message);
      }
    }
  };

  const handleLogin = () => {
    setResetPasswordState(true);
  };

  useEffect(() => {
    evaluateErrors(errors, setStatusSubmit);
  }, [errors, statusSubmit]);

  return (
    <ResetPasswordStyle>
      <ResetPasswordText $principal>Recupera tu cuenta</ResetPasswordText>
      <ResetPasswordText $secondary>
        Ingrese su correo electrónico
      </ResetPasswordText>
      <FormCntStyle onSubmit={handleResetPassword} autoComplete="on">
        <FormCntInput
          type="email"
          name="email"
          placeholder="Escribe tu correo electrónico"
          onChange={handleChange}
          value={formData.email}
          autoComplete="off"
        />
        {errors.email && <FormCntError>{errors.email}</FormCntError>}

        <FormCntButton type="submit">
          Restablecer{" "}
          {statusSubmit && (
            <img
              src={marcaCheck}
              alt="icon se puede enviar"
              style={{ width: "14px" }}
            />
          )}
        </FormCntButton>
      </FormCntStyle>

      {messageError && <FormCntError>{messageError}</FormCntError>}

      <ResetPasswordText $password onClick={handleLogin}>
        Iniciar Sesión
      </ResetPasswordText>

      <ResetPasswordText $finally>
        ¿No tienes una cuenta?
        <LinkContent to={"/registro"}>
          <ButtonPrimary text={"Crear cuenta"} />
        </LinkContent>
      </ResetPasswordText>
    </ResetPasswordStyle>
  );
};

ResetPassword.propTypes = {
  setResetPasswordState: PropTypes.func.isRequired,
};

export default ResetPassword;
