import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import passwordOffImg from "../assets/png/passwordOff.png";
import passwordOnImg from "../assets/png/passwordOn.png";
import validations from "../utils/validations";
import marcaCheck from "../assets/svg/marcaCheck.svg";

const FormContactoStyle = styled.div`
  background-color: rgb(28, 30, 83);
  padding: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormContactoText = styled.p`
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

const FormContacto = () => {
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
      }, 10000);

      // aplicar la fetch
    }
  };

  useEffect(() => {
    evaluateErrors(errors, setStatusSubmit);
  }, [errors, statusSubmit]);

  return (
    <FormContactoStyle>
      <FormContactoText $principal>Contacto</FormContactoText>
      <FormContactoText $secondary>
        Ante alguna duda mande un mensaje
      </FormContactoText>

      <FormCntStyle onSubmit={submitForm} autoComplete="on">
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
          <FormCntError>
            Su mensaje fué enviando, nos pondremos en contacto lo mas pronto posible
          </FormCntError>
        ) : (
          !statusSubmit && (
            <FormCntError>*Todos los campos son requeridos.</FormCntError>
          )
        )}
      </FormCntStyle>

      {/* <FormContactoText $finally>
        ¿Ya tienes una cuenta? Iniciar sesión
      </FormContactoText> */}
    </FormContactoStyle>
  );
};

export default FormContacto;
