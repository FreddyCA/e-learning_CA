import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import passwordOffImg from "../assets/png/passwordOff.png";
import passwordOnImg from "../assets/png/passwordOn.png";
import validations from "../utils/validations";
import marcaCheck from "../assets/svg/marcaCheck.svg";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

const LoginFormStyle = styled.div`
  background-color: rgb(28, 30, 83);
  padding: 3rem;
  width: 700px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginFormText = styled.p`
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

const FormCntSucces = styled.span`
  color: orange;
  font-size: 1rem;
  font-weight: 400;
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
const FormCntPassword = styled.label`
  display: flex;
`;
const FormCntPasswordContent = styled.div`
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
const FormCntPasswordButton = styled.img`
  width: 24px;
  height: 24px;
`;

const initialForm = {
  email: "",
  password: "",
};
const initialErrors = {
  email: false,
  password: false,
};

const evaluateErrors = (errors, setStatusSubmit) => {
  const valuesState = Object.values(errors).every((value) => value === true);
  setStatusSubmit(valuesState);
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [statusPassword, setStatusPassword] = useState(true);
  const [errors, setErrors] = useState(initialErrors);
  const [statusSubmit, setStatusSubmit] = useState(false);

  const [errorGeneral, setErrorGeneral] = useState("");

  // constrolando el estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validations(name, value, setErrors);
  };
  // visualizando el password
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setStatusPassword(!statusPassword);
  };

  const navigate = useNavigate();

  //   mensaje de correcto
  const succesMsForm = () => {
    navigate("/panel-de-usuario");
  };

  //   obteniendo el register
  const { login, errorCode } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (statusSubmit) {
      console.log("login", formData);
      await login(formData.email, formData.password);
      succesMsForm();
    }
  };

  console.log(errorCode);
  useEffect(() => {
    evaluateErrors(errors, setStatusSubmit);
  }, [errors, statusSubmit]);

  useEffect(() => {
    if (!errorCode) {
      return;
    }
    setErrorGeneral(errorCode.message);
  }, [errorCode]);

  return (
    <LoginFormStyle>
      <LoginFormText $principal>Bienvenido</LoginFormText>
      <LoginFormText $secondary>Ingresa tu correo y contraseña</LoginFormText>
      <FormCntStyle onSubmit={handleSubmit} autoComplete="on">
        <FormCntInput
          type="email"
          name="email"
          placeholder="Escribe tu correo electrónico"
          onChange={handleChange}
          value={formData.email}
          autoComplete="off"
        />
        {errors.email && <FormCntError>{errors.email}</FormCntError>}

        <FormCntPassword>
          <FormCntInput
            type={statusPassword ? "password" : "text"}
            name="password"
            placeholder="Escribe una contraseña"
            onChange={handleChange}
            value={formData.password}
            autoComplete="off"
          />
          {statusPassword ? (
            <FormCntPasswordContent onClick={handleTogglePassword}>
              <FormCntPasswordButton
                src={passwordOnImg}
                alt="icon password on"
              />
            </FormCntPasswordContent>
          ) : (
            <FormCntPasswordContent onClick={handleTogglePassword}>
              <FormCntPasswordButton
                src={passwordOffImg}
                alt="icon password off"
              />
            </FormCntPasswordContent>
          )}
        </FormCntPassword>
        {errors.password && <FormCntError>{errors.password}</FormCntError>}

        <FormCntButton type="submit">
          Iniciar Sesión{" "}
          {statusSubmit && (
            <img
              src={marcaCheck}
              alt="icon se puede enviar"
              style={{ width: "14px" }}
            />
          )}
        </FormCntButton>

        {/* {!statusSubmit && (
          <FormCntError>*Todos los campos son requeridos.</FormCntError>
        )} */}

        {/* {errorGeneral && <FormCntError>{errorGeneral}</FormCntError>} */}
      </FormCntStyle>

      {/* <LoginFormText $finally>
        ¿Ya tienes una cuenta? Iniciar sesión
      </LoginFormText> */}
    </LoginFormStyle>
  );
};

export default LoginForm;
