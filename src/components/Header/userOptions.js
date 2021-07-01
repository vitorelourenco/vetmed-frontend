import styled from "styled-components";
import { Link , useHistory} from "react-router-dom";
import logOut from '../../helper_functions/logout';
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export function AuthedUserOptions(){
  const history = useHistory();
  const {user, setUser} = useContext(UserContext);
  return (
    <UserOptionsBox>
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Minhas compras</Link>
      <span onClick={()=>logOut(user, setUser, history)}>Sair</span>
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
  a,span{
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