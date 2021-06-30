import styled from "styled-components";
import { Link } from "react-router-dom";

export function AuthedUserOptions(){
  return (
    <UserOptionsBox>
      <Link to="/signup">Minhas compras</Link>
      <Link to="/login">Sair</Link>
    </UserOptionsBox>
  );
}

export function GuestUserOptions(){
  return (
    <UserOptionsBox>
      <Link to="/signup">Cadastre-se</Link>
      <Link to="/login">Acesse sua conta</Link>
    </UserOptionsBox>
  );
}

const UserOptionsBox = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  a:first-child{
    border-bottom: 1px solid white;
    padding-bottom: 2px;
  }
  a{
    width: 100%;
    text-align: center;
  }
  font-size:20px;
  line-height: 22px;
  color: white;
  font-family: Ubuntu;

  @media (max-width: 768px){
    font-size: 16px;
  }
`;