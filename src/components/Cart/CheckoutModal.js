import React,{useContext, useEffect, useState} from 'react';
import ReactModal from "react-modal";
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import EmbededAuth from './EmbededAuth';
import PlaceOrder from './PlaceOrder';

ReactModal.defaultStyles.overlay.zIndex = 15;

// route /products will send a message when accessed
// this custom hook will fetch the message and run the callback
const useEmbededAuth = (callback) =>{
  const onReceiveMessage = event => {
    let { data } = event;
    switch (data) {
      case 'url_changed':
          callback();
          break;
      default:
          break;
    }
  };
  useEffect(()=>{
    window.addEventListener("message", onReceiveMessage)
    return () => window.removeEventListener("message", onReceiveMessage)
  })
}

export default function CheckoutModal({setShowCheckoutModal}){
  function ExitModal(){
    return (
      <p style={{cursor:"pointer", flexShrink:"0", height: "100%"}} onClick={()=>setShowCheckoutModal(false)}>X</p>
    )
  }
  const {user, setUser} = useContext(UserContext);
  const {cart} = useContext(CartContext);
  const [isAuthed,setIsAuthed] = useState(!!user);
  //update the user when login is successful
  useEmbededAuth(()=>{
    const userStorage = localStorage.getItem("user");
    const localUser = JSON.parse(userStorage);
    setUser(localUser);
    setIsAuthed(true);
  });

  return (
    <StyledModal
      isOpen={true}
      contentLabel="Checkout"
    >
      <Header>
        <p>{isAuthed?"Finalize seu pedido":"Faça login para prosseguir"}</p>
        <ExitModal />
      </Header>
      {isAuthed?<PlaceOrder cart={cart}/>:<EmbededAuth />}
    </StyledModal>
  );
}

const StyledModal = styled(ReactModal)`
  top: 50vh;
  left: 50vw;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  max-width: 790px;
  width: 100%;
  background: rgb(255, 153, 153);
  border-radius: 20px;
  user-select: none;

  position: absolute;
  z-index: 16;
  padding: 10px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 38px;
  color: #333;
  font-weight: bold;
  font-family: Oswald, "sans-serif";
  margin-bottom: 8px;
  word-break: break-all;
`;