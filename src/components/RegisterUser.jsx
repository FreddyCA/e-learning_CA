import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import passwordOffImg from "../assets/png/passwordOff.png";
import passwordOnImg from "../assets/png/passwordOn.png";
import validations from "../utils/validations";
import marcaCheck from "../assets/svg/marcaCheck.svg";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

const RegisterUserStyle = styled.div`
  background-color: rgb(28, 30, 83);
  padding: 3rem;
  width: 992px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RegisterUserText = styled.p`
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
  name: "",
  lastname: "",
  email: "",
  password: "",
};
const initialErrors = {
  name: false,
  lastname: false,
  email: false,
  password: false,
};

const evaluateErrors = (errors, setStatusSubmit) => {
  const valuesState = Object.values(errors).every((value) => value === true);
  setStatusSubmit(valuesState);
};

const RegisterUser = () => {
  const [formData, setFormData] = useState(initialForm);
  const [statusPassword, setStatusPassword] = useState(true);
  const [errors, setErrors] = useState(initialErrors);
  const [statusSubmit, setStatusSubmit] = useState(false);

  const [errorGeneral, setErrorGeneral] = useState("");

  const [loadingForm, setLoadingForm] = useState(false);
  const [succesForm, setSuccesForm] = useState(false);

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
    setSuccesForm(true);
    setTimeout(() => {
      setSuccesForm(false);

    //   **redirigir hacia su panel de bienvenida
      navigate("/");
    }, 5000);
  };

  //   obteniendo el register
  const { register, errorCode } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (statusSubmit) {
      try {
        console.log("enviando", formData);
        setLoadingForm(true);
        await register(formData.name, formData.email, formData.password);
        succesMsForm();
        setFormData(initialForm);
        setErrors(initialErrors);
        setLoadingForm(false);
      } catch (error) {
        console.log("dentro de register componetn", error);
        setErrorGeneral(errorCode.message);
      }
    }
  };

  useEffect(() => {
    evaluateErrors(errors, setStatusSubmit);
  }, [errors, statusSubmit]);

  return (
    <RegisterUserStyle>
      <RegisterUserText $principal>Bienvenido</RegisterUserText>
      <RegisterUserText $secondary>
        Un gran paso hacía el desarrollo
      </RegisterUserText>

      <FormCntStyle onSubmit={handleSubmit} autoComplete="on">
        <FormCntInput
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          value={formData.name}
          autoComplete="off"
        />
        {errors.name && <FormCntError>{errors.name}</FormCntError>}

        <FormCntInput
          type="text"
          name="lastname"
          placeholder="Escribe tu apellido"
          onChange={handleChange}
          value={formData.lastname}
          autoComplete="off"
        />
        {errors.lastname && <FormCntError>{errors.lastname}</FormCntError>}

        <FormCntInput
          type="email"
          name="email"
          placeholder="Escribe tu Email"
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

        {loadingForm ? (
          <FormCntButton>Enviando...</FormCntButton>
        ) : (
          <FormCntButton type="submit">
            Enviar{" "}
            {statusSubmit && (
              <img
                src={marcaCheck}
                alt="icon se puede enviar"
                style={{ width: "14px" }}
              />
            )}
          </FormCntButton>
        )}

        {succesForm ? (
          <FormCntSucces>Su registro fué exitoso</FormCntSucces>
        ) : (
          !statusSubmit && (
            <FormCntError>*Todos los campos son requeridos.</FormCntError>
          )
        )}

        {errorGeneral && <FormCntError>{errorGeneral}</FormCntError>}
      </FormCntStyle>

      {/* <RegisterUserText $finally>
        ¿Ya tienes una cuenta? Iniciar sesión
      </RegisterUserText> */}
    </RegisterUserStyle>
  );
};

export default RegisterUser;
