import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import ProductDescription from "./ProductDescription";
import addToCart from "../../helper_functions/addToCart";

export default function Product({product}){
    const [qtd,setQtd] = useState(0);
    const {cart,setCart} = useContext(CartContext)
    const [isOpen,setIsOpen] = useState(false)

    return(
        <Body>
            <ProductDescription product={product} open={isOpen} setIsOpen={setIsOpen} qtd={qtd} setQtd={setQtd} addToCart={addToCart} cart={cart} setCart={setCart}/>
            <div onClick={()=>{setIsOpen(true)}}>
            <img src={product.img} alt={product.name}/>
            <Title>{product.name}</Title>
            </div>
            <Bottom>
                <span>R${(product.price/100).toFixed(2).replace('.',',')}</span>
                <Cart>
                    <div>
                        <Minus onClick={()=>qtd>0 && setQtd(qtd-1)}/>
                        {qtd}
                        <Plus onClick={()=>setQtd(qtd+1)}/>
                    </div>
                    <button onClick={()=>addToCart(qtd,product,setQtd,cart,setCart)}>Comprar</button>
                </Cart>
            </Bottom>
        </Body>
    )
}

const Body = styled.div`
    width: 206px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 25px;
    position: relative;
    user-select: none;
    padding-bottom: 50px;
    img{
        width: 100%;
        height: 125px;
        border-radius: 10px;
        cursor: pointer;
    }
`
const Title = styled.p`
    color: #333;
    margin: 6px 11px;
    cursor: pointer;
`

const Bottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: 15px;
    left: 0;
    padding: 0 11px;
    span{
        font-weight: bold;
        margin: 0;
        color: #000;
    }
`
const Cart = styled.div`
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    button{
        border: none;
        background-color: #c10000;
        border-radius: 5px;
        color:#fff;
        font-weight: 700;
        cursor: pointer;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Plus = styled(AiOutlinePlusCircle)`
    font-size: 25px;
    color: #848484;
    margin-left: 5px;
    cursor: pointer;
`
const Minus = styled(AiOutlineMinusCircle)`
    font-size: 25px;
    color: #848484;
    margin-right: 5px;
    cursor: pointer;
`

