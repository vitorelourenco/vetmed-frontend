import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import UserContext from "../contexts/UserContext";

import Form from "../components/Form";

import logo39 from "../assets/images/vetmed-logo39.png";

class FormState {
  constructor() {
    this.email = "";
    this.password = "";
  }
}

export default function Login() {
  const [formState, setFormState] = useState(new FormState());
  const [isInteractive, setIsInteractive] = useState(true);
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  function submitLogin() {
    setIsInteractive(false);
    axios
      .post("http://localhost:4000/login", formState)
      .then(({ data: user }) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/");
      })
      .catch((err) => {
        setIsInteractive(true);
        if (err?.response?.status === 401) {
          passwordRef.current.disabled = false;
          passwordRef.current.setCustomValidity("Senha incorreta");
          formRef.current.reportValidity();
        } else if (err?.response?.status === 404) {
          emailRef.current.disabled = false;
          emailRef.current.setCustomValidity("e-mail não cadastrado");
          formRef.current.reportValidity();
        } else {
          alert(err);
        }
      });
  }

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);
  return (
    <PageWrapper>
      <Logo>
        <img src={logo39} alt="VETMET LOGO" />
        vetmed
      </Logo>
      <Form ref={formRef} customSubmit={submitLogin}>
        <input
          required
          disabled={!isInteractive}
          ref={emailRef}
          type="email"
          placeholder="E-mail"
          value={formState.email}
          onChange={(e) => {
            passwordRef.current.setCustomValidity("");
            emailRef.current.setCustomValidity("");
            formState.email = e.target.value;
            setFormState({ ...formState });
          }}
        />
        <input
          required
          disabled={!isInteractive}
          type="password"
          placeholder="Senha"
          value={formState.password}
          ref={passwordRef}
          onChange={(e) => {
            passwordRef.current.setCustomValidity("");
            formState.password = e.target.value;
            setFormState({ ...formState });
          }}
        />
        <button disabled={!isInteractive}>Entrar</button>
      </Form>
      <Footer>
        <Link to="/signup">Primeira vez? Cadastre-se!</Link>
      </Footer>
    </PageWrapper>
  );
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
