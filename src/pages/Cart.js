import styled from "styled-components";
import FlexCartRows from "../components/Cart/FlexCartRows";
import Form from "../components/Form";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import UserContext from "../contexts/UserContext";
import Header from "../components/Header/Header";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CheckoutModal from "../components/Cart/CheckoutModal";
import CartContext from "../contexts/CartContext";

export default function Cart() {
  const { user, setUser } = useContext(UserContext);

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const {cart} = useContext(CartContext);

  function OrderSummaryRow() {
    return (
      <OrderSummaryWrapper>
        Total:&nbsp;R$&nbsp;
        {cart
          ?.reduce((acc, product) => {
            return (acc += (product.qtd * product.price) / 100);
          }, 0)
          .toFixed(2)
          .replace(".", ",") || "-"}
        &nbsp;
        <GoToCheckout disabled={(cart?.length || 0) === 0} onClick={() => setShowCheckoutModal(true)}>
          Comprar
        </GoToCheckout>
      </OrderSummaryWrapper>
    );
  }

  return (
    <>
      <Header />
      <CartWrapper>
        <PageTitle>
          Meu carrinho
          <AiOutlineShoppingCart />
        </PageTitle>
        <ProductsWrapper>
          {cart?.length > 0 ? (
            <FlexCartRows cart={cart} />
          ) : (
            "Nenhum produto no carrinho"
          )}
          <OrderSummaryRow cart={cart} />
        </ProductsWrapper>
      </CartWrapper>
      {showCheckoutModal ? (
        <CheckoutModal setShowCheckoutModal={setShowCheckoutModal} />
      ) : (
        ""
      )}
    </>
  );
}

const CartWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 120px;

  @media (max-width: 588px) {
    margin-top: 130px;
  }
`;

const PageTitle = styled.h1`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  font-size: 20px;
  font-family: "Viga", sans-serif;
  color: var(--vivid-red);
`;

const ProductsWrapper = styled.main`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  padding: 10px;
  color: #333;
  border: 2px dashed var(--vivid-red);
  background-color: white;
`;

const OrderSummaryWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid white;
  margin-top: 10px;
  padding-top: 5px;
`;

const GoToCheckout = styled.button`
  background-color: var(--dark-red);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  :disabled{
    filter:brightness(0.3);
  }
`;
