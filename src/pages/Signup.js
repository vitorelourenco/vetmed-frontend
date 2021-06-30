import styled from "styled-components";
import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Form from "../components/Form";

import logo39 from "../assets/images/vetmed-logo39.png";

class FormState {
  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }
}

export default function Signup() {
  const history = useHistory();

  const [formState, setFormState] = useState(new FormState());
  const [isInteractive, setIsInteractive] = useState(true);

  const emailRef = useRef(null);
  const formRef = useRef(null);

  function submitSignup() {
    setIsInteractive(false);
    const body = { ...formState };
    delete body["confirmPassword"];
    axios
      .post("http://localhost:4000/signup", body)
      .then(() => history.push("/login"))
      .catch((err) => {
        setIsInteractive(true);
        if (err?.response?.status === 409) {
          emailRef.current.disabled = false;
          emailRef.current.setCustomValidity("e-mail já cadastrado");
          formRef.current.reportValidity();
        } else {
          alert(err);
        }
      });
  }

  return (
    <PageWrapper>
      <Logo>
        <img src={logo39} alt="VETMET LOGO" />
        vetmed
      </Logo>
      <Form ref={formRef} customSubmit={submitSignup}>
        <input
          required
          disabled={!isInteractive}
          type="text"
          placeholder="Nome"
          value={formState.name}
          onChange={(e) => updateFormState(e, formState, setFormState, "name")}
        />
        <input
          required
          ref={emailRef}
          disabled={!isInteractive}
          type="email"
          placeholder="E-mail"
          value={formState.email}
          onChange={(e) => {
            updateFormState(e, formState, setFormState, "email");
            e.target.setCustomValidity("");
          }}
        />
        <input
          required
          disabled={!isInteractive}
          type="password"
          placeholder="Senha"
          value={formState.password}
          onChange={(e) =>
            updateFormState(e, formState, setFormState, "password")
          }
        />
        <input
          required
          disabled={!isInteractive}
          type="password"
          placeholder="Confirme a senha"
          value={formState.confirmPassword}
          onChange={(e) => {
            updateFormState(e, formState, setFormState, "confirmPassword");
            if (formState.password === formState.confirmPassword) {
              e.target.setCustomValidity("");
            } else {
              e.target.setCustomValidity("Senhas não coincidem");
            }
          }}
        />
        <button disabled={!isInteractive}>Cadastrar</button>
      </Form>
      <Footer>
        <Link to="/login">Já tem uma conta? Entre agora!</Link>
      </Footer>
    </PageWrapper>
  );
}

function updateFormState(e, state, setState, key) {
  state[key] = e.target.value;
  setState({ ...state });
}

const PageWrapper = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin-bottom: 24px;
  }

  form {
    margin-bottom: 36px;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  line-height: 50px;
  font-family: "Syncopate";
  display: flex;
  align-items: start;
  background: white;
  padding: 10px;
  padding-top: 20px;
  border-radius: 5px;
  color: var(--dark-red);
`;

const Footer = styled.footer`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;
