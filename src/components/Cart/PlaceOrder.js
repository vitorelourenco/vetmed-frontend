import styled from "styled-components";

export default function PlaceOrder({ cart }) {
  return (
    <>
      <ListCart cart={cart} />
    </>
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
