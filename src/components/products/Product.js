import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import { useState } from "react";

export default function Product({product}){
    const [qtd,setqtd] = useState(0)
    return(
        <Body>
            <img src={product.img} alt={product.name}/>
            <span>{product.name}</span>
            <Bottom>
                <span>R${(product.price/100).toFixed(2).replace('.',',')}</span>
                <Cart>
                    <div>
                        <Plus/>
                        {qtd}
                        <Minus/>
                    </div>
                    
                    <button>Comprar</button>
                </Cart>
            </Bottom>
        </Body>
    )
}
const Body = styled.div`
    width: 216px;
    height: 301px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 25px;
    position: relative;
    img{
        width: 100%;
        height: 125px;
        border-radius: 10px;
    }
    span{
        color: #333;
        margin: 11px;
    }
`
const Bottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: 15px;
    left: 0;
    padding: 0 11px;
    span{
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
        background-color: red;
        border-radius: 10px;
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
    margin-right: 5px;
`
const Minus = styled(AiOutlineMinusCircle)`
    font-size: 25px;
    color: #848484;
    margin-left: 5px;
`

