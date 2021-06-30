import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function FlexCartRows({ products }) {
  return (
    <CartProducts>
      {products?.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </CartProducts>
  );
}

function CartProduct({ product }) {
  return (
    <div>
      <CartProductWrapper>
        <img className="product--image" src={product.img} alt={product.name} />
        <div className="product--summary">
          <p className="product--summary-name">{product.name}</p>
          <p className="product--summary-description">{product.description}</p>
          <p className="product--summary-price">Preço: R${(product.price / 100).toFixed(2).replace(".", ",")}</p>
        </div>
        <div className="wrapper"></div>
        <div className="product--amount">
          <p className="center-flex-text">Quantidade</p>
          <div className="flex-center">
            <AiOutlineMinusCircle />
            &nbsp;{product.qtd}&nbsp;
            <AiOutlinePlusCircle />
          </div>
        </div>
        <div className="product--total">
          <p className="center-flex-text">Total</p>
          <p>
            R$
            {((product.price * product.qtd) / 100).toFixed(2).replace(".", ",")}
          </p>
        </div>
      </CartProductWrapper>
      <RemoveProduct>Remover produto</RemoveProduct>
    </div>
  );
}

const CartProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RemoveProduct = styled.div`
  background-color: white;
  padding: 3px;
  width: 160px;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  color: var(--vivid-red);
  box-shadow: 0 0 3px 1px #dedede;
  position: relative;

  &::before{
    content:" ";
    display: block;
    position: absolute;
    width: 160px;
    background-color: white;
    top: -3px;
    left: 0;
    height: 3px;
  }
`;

const CartProductWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  padding: 5px;
  gap: 10px;
  box-shadow: 0 0 3px 1px #dedede;
  font-size: 18px;

  svg{
    cursor: pointer;
    font-size: 1.5em;
  }
  
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center-flex-text {
    width: 100%;
    text-align: center;
  }

  .wrapper{
    display: none;
    @media (max-width: 615px){
      display: block;
      flex: 1 1 100%;
      border-top: 1px solid #eee;
    }
  }

  .product--image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    align-self: center;
    border-radius: 5px;
    flex: 0 0 60px;
  }

  .product--summary {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    max-width: 30ch;
    flex: 1 1;

    @media (max-width: 615px){
      max-width: unset;
    }

    .product--summary-name{
      font-family: "Viga", sans-serif;
      font-size: 1.2em;
    }

    .product--summary-price{
      font-size: 0.8em;
    }

    .product--summary-description{
      font-size: 0.9em;
      color: #848484;
    }
  }

  .product--amount {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    height: 2.5em;
    width: 100px;
    margin-left: auto;
    font-size: 0.85em;
  }

  .product--total {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    height: 2.5em;
    padding-bottom: 0.25em;
    width: 100px;
    font-size: 0.85em;
  }

  .product--total-withdescription {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
