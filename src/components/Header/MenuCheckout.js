import {AiOutlineShoppingCart} from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';

export default function MenuCheckout(){
  const {cart} = useContext(CartContext)
  return(
    <MenuWrapper to="/cart">
      <Cart />
      <ItemCounter numberOfItems={cart?.length || 0}/>
      <p className="checkout--text">Finalizar<br/>Pedido</p>
    </MenuWrapper>
  );
}

const Cart = styled(AiOutlineShoppingCart)`
  color: white;
  font-size: 35px;

  @media (max-width: 768px){
    font-size: 25px;
  }
`;

const MenuWrapper = styled(Link)`
  flex: 0 0 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: white;
  text-align: center;
  font-size: 18px;
  line-height: 20px;
  font-family: Ubuntu;

  .checkout--text{
    @media (max-width: 768px){
      display: none;
    }
  }

  @media (max-width: 768px){
    flex: 0 0 42px;
  }
`;

const CounterWrapper = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  position: absolute;
  top: 20px;
  left: 30px;
  background-color: var(--dark-red);

  @media (max-width: 768px){
    width: 18px;
    height: 18px;
    top: 25px;
    left: 22px;
  }
`;

function ItemCounter({numberOfItems}){
  return(
    <CounterWrapper>{numberOfItems ?? 0}</CounterWrapper>
  )
}