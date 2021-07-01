import { useContext, useState } from "react";
import styled from "styled-components"
import CartContext from "../../contexts/CartContext";
import addToCart from "../../helper_functions/addToCart";
import ProductDescription from "../products/ProductDescription";



export default function Result({result}){
    const [qtd,setQtd] = useState(0);
    const {cart,setCart} = useContext(CartContext)
    const [isOpen,setIsOpen] = useState(false)
    return (
        <Body>
            <img src={result.img} alt={result.name}/>
            <span onClick={()=>setIsOpen(true)}>{result.name}</span>
            <ProductDescription product={result} open={isOpen} setIsOpen={setIsOpen} qtd={qtd} setQtd={setQtd} addToCart={addToCart} cart={cart} setCart={setCart}/>
        </Body>
    )
}

const Body = styled.button`
    border: none;
    background-color: inherit;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    color:  var(--vivid-red);
    img{
        width:30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
    }
    &:hover{
        cursor: pointer;
    }

`