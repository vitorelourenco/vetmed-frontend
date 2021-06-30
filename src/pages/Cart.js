import styled from "styled-components";
import FlexCartRows from "../components/Cart/FlexCartRows";
import Form from "../components/Form";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import UserContext from "../contexts/UserContext";
import Header from "../components/Header/Header";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import CheckoutModal from "../components/Cart/CheckoutModal";

class FormState {
  constructor(name, email) {
    this.email = "";
    this.password = "";
  }
}

const products = [
  {
    img: "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_1254x836.jpg",
    id: "1",
    description:
      "sou bananasou bananasou bananasou bananasou bananasou bananasou banana",
    name: "test1",
    price: "300",
    qtd: "5",
    total: "1500",
  },
  {
    img: "https://superprix.vteximg.com.br/arquivos/ids/175207-600-600/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000",
    id: "2",
    description: "sou maca",
    name: "test2",
    price: "300",
    qtd: "2",
    total: "600",
  },
  {
    img: "https://hiperideal.vteximg.com.br/arquivos/ids/167745-1000-1000/80764.jpg?v=636615816415070000",
    id: "3",
    description: "sou pera",
    name: "test3",
    price: "400000",
    qtd: "5",
    total: "2000",
  },
];

// const products = [];

export default function Cart() {
  const { user, setUser } = useContext(UserContext);
  const [formState, setFormState] = useState(
    new FormState(user?.name, user?.email)
  );
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  function OrderSummaryRow({ products }) {
    return (
        <OrderSummaryWrapper>
          Total:&nbsp;R$&nbsp;
          {products
            ?.reduce((acc, product) => {
              return (acc += (product.qtd * product.price) / 100);
            }, 0)
            .toFixed(2)
            .replace(".", ",") || "NaN"}
          &nbsp;
          <GoToCheckout>Comprar</GoToCheckout>
        </OrderSummaryWrapper>
    );
  };

  return (
    <>
      <Header />
      <CartWrapper>
        <PageTitle>Meu carrinho<AiOutlineShoppingCart /></PageTitle>
        <ProductsWrapper>
          {products?.length > 0 ? (
            <FlexCartRows products={products} />
          ) : (
            "Nenhum produto no carrinho"
          )}
          <OrderSummaryRow products={products} />
        </ProductsWrapper>
      </CartWrapper>
      <CheckoutModal showCheckoutModal={showCheckoutModal} setShowCheckoutModal={setShowCheckoutModal} />
    </>
  );
}

const CartWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const PageTitle = styled.h1`
  margin-top: 60px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 588px){
    margin-top: 120px;
  }
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
`;
