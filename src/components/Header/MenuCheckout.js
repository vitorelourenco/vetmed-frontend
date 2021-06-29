import {AiOutlineShoppingCart} from 'react-icons/ai';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function MenuCheckout(){
  return(
    <MenuWrapper to="/checkout">
      <AiOutlineShoppingCart 
        color="white"
        size="35"
      />
      <ItemCounter numberOfItems={2}/>
      <p>Finalizar<br/>Pedido</p>
    </MenuWrapper>
  );
}

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
`;

function ItemCounter({numberOfItems}){
  return(
    <CounterWrapper>{numberOfItems ?? 0}</CounterWrapper>
  )
}