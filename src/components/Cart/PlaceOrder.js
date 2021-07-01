import styled from "styled-components";
import Form from "../Form";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { useState,useContext } from "react";
import axios from "axios";

class FormState {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.street = "";
    this.number = "";
    this.adjunct = "";
    this.neighbourhood = "";
    this.postalCode = "";
    this.nameOnCreditCard = "";
    this.expirationDate = "";
    this.creditCardNumber = "";
    this.safetyCode = "";
  }
}

export default function PlaceOrder({setShowCheckoutModal}) {

  function submitOrder(){
    const body = {};
    const {name, email, street, number, adjunct, neighbourhood, postalCode} = formState;
    body.name = name;
    body.email = email;
    body.street = street;
    body.number = number;
    body.adjunct = adjunct;
    body.neighbourhood = neighbourhood;
    body.postalCode = postalCode;
    body.paymentType = "cc";

    const config = {
      headers : {
        Authorization: `Bearer ${user.token}`
      }
    };

    axios
    .post("http://localhost:4000/orders",body,config)
    .then(()=>{
      setCart([]);
      alert("Compra feita com sucesso");
      setShowCheckoutModal(false);
    })
    .catch(err=>alert(err));
  }

  const {cart, setCart} = useContext(CartContext);
  const {user} = useContext(UserContext);
  const [formState, setFormState] = useState(new FormState(user.name, user.email));
  
  return (
    <PlaceOrderWrapper>
      <p className="orderSummary">Resumo do seu pedido</p>
      <ListCart cart={cart} />
      <Form customSubmit={submitOrder}>
        <p>Informações do destinatário</p>
        <label for="nome">Nome:</label>
        <input 
          required
          id="nome"
          value={formState.name}
          type="text"
          placeholder="Pedro Alvez"
          onChange={(e)=>{
            formState.name = e.target.value;
            setFormState({...formState});
          }}
        />
        <label for="email">email:</label>
        <input 
          required
          id="email"
          value={formState.email}
          type="email"
          placeholder="pedro@gmail.com"
          onChange={(e)=>{
            formState.email = e.target.value;
            setFormState({...formState});
          }}
        />
        <p>Endereço do destinatário</p>
        <label for="street">Rua:</label>
        <input 
          required
          id="street"
          value={formState.street}
          type="text"
          placeholder="Presidente Vargas"
          onChange={(e)=>{
            formState.street = e.target.value;
            setFormState({...formState});
          }}
        />
        <label for="number">Número:</label>
        <input 
          required
          id="number"
          value={formState.number}
          type="number"
          placeholder="38"
          onChange={(e)=>{
            formState.number = e.target.value;
            setFormState({...formState});
          }}
        />
        {/* the one bellow isnt required */}
        <label for="adjunct">Complemento:</label>
        <input 
          id="adjunct"
          value={formState.adjunct}
          type="text"
          placeholder="ap 506"
          onChange={(e)=>{
            formState.adjunct = e.target.value;
            setFormState({...formState});
          }}
        />
        <label for="neighbourhood">Bairro:</label>
        <input 
          required
          id="neighbourhood"
          value={formState.neighbourhood}
          type="text"
          placeholder="Mogi"
          onChange={(e)=>{
            formState.neighbourhood = e.target.value;
            setFormState({...formState});
          }}
        />
        <label for="postalCode">CEP:</label>
        <input 
          required
          id="postalCode"
          value={formState.postalCode}
          type="text"
          placeholder="20540-222"
          onChange={(e)=>{
            formState.postalCode = e.target.value;
            setFormState({...formState});
          }}
        />
        <p>Informações de pagamento</p>
        <label for="nameOnCreditCard">Nome no cartão de crédito:</label>
        <input 
          required
          id="nameOnCreditCard"
          value={formState.nameOnCreditCard}
          type="text"
          placeholder="PEDRO ALVEZ"
          onChange={(e)=>{
            formState.nameOnCreditCard = e.target.value;
            setFormState({...formState});
          }}
        />
        <label for="creditCardNumber">Número do cartão:</label>
        <input 
          required
          id="creditCardNumber"
          value={formState.creditCardNumber}
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={(e)=>{
            formState.creditCardNumber = e.target.value;
            setFormState({...formState});
          }}
        />
        <label for="expirationDate">Data de expiração:</label>
        <input 
          required
          id="expirationDate"
          value={formState.expirationDate}
          type="text"
          placeholder="MM/AA"
          onChange={(e)=>{
            formState.expirationDate = e.target.value;
            setFormState({...formState});
          }}
        />
        <label for="safetyCode">Código de segurança:</label>
        <input 
          required
          id="safetyCode"
          value={formState.safetyCode}
          type="text"
          placeholder="XXX"
          onChange={(e)=>{
            formState.safetyCode = e.target.value;
            setFormState({...formState});
          }}
        />
        <button>Finalizar Pedido</button>
      </Form>
    </PlaceOrderWrapper>
  );
}

function ListCart({ cart }) {
  return (
    <TableWrapper>
      <tr>
        <th>Item</th>
        <th>qtd</th>
        <th>Total</th>
      </tr>
      {cart.map((product) => {
        return (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.qtd}</td>
            <td>
              R$
              {((product.price * product.qtd) / 100)
                .toFixed(2)
                .replace(".", ",")}
            </td>
          </tr>
        );
      })}
      <tr>
        <td className="b-none"></td>
        <td className="b-none"></td>
        <td>R${cart
          ?.reduce((acc, product) => {
            return (acc += (product.qtd * product.price) / 100);
          }, 0)
          .toFixed(2)
          .replace(".", ",") || "-"}
        </td>
      </tr>
    </TableWrapper>
  );
}

const PlaceOrderWrapper = styled.div`
  padding: 10px;
  background-color: #eee;
  height: 80vh;
  border-radius: 10px;
  overflow-y: scroll;

  table{
    margin-bottom: 20px;
  }

  .orderSummary{
    margin-bottom: 10px;
  }

  form {
    font-size: 16px;
    gap: 5px;

    p{
      text-decoration: underline;
      margin: 10px auto 5px auto;
    }

    input{
      height: 30px;
      margin-bottom: 10px;
      border-radius: 0;
      border: 1px solid #333;
      padding-left: 5px;
    }
  }

`;

const TableWrapper = styled.table`
  color: #333;
  width: 100%;

  .b-none {
    border: none;
  }

  td,
  th {
    border: 2px solid #333;
    text-align: center;
  }
`;
