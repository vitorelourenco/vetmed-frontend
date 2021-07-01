import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import ProductDescription from "./ProductDescription";

export default function Product({product}){
    const [qtd,setQtd] = useState(0);
    const {cart,setCart} = useContext(CartContext)
    const [isOpen,setIsOpen] = useState(false)

    function addToCart(){
        const productInCart =cart?.find(c=>c.id ===product.id);
        if(productInCart){
            productInCart.qtd+=qtd;
            productInCart.total = productInCart.qtd*product.price
            setCart(cart)
        }
        else if(qtd>0){
            cart ? 
            setCart([...cart,{
                id:product.id,
                name:product.name,
                description:product.description,
                img:product.img,
                price:product.price,
                qtd,
                total: qtd*product.price
            }])
            :
            setCart([{
                id:product.id,
                name:product.name,
                description:product.description,
                img:product.img,
                price:product.price,
                qtd,
                total: qtd*product.price

            }])
        }
        setQtd(0)
    }
    return(
        <Body>
            <ProductDescription product={product} open={isOpen} setIsOpen={setIsOpen}/>
            <div onClick={()=>{setIsOpen(true)}}>
            <img src={product.img} alt={product.name}/>
            <span>{product.name}</span>
            </div>
            <Bottom>
                <span>R${(product.price/100).toFixed(2).replace('.',',')}</span>
                <Cart>
                    <div>
                        <Minus onClick={()=>qtd>0 && setQtd(qtd-1)}/>
                        {qtd}
                        <Plus onClick={()=>setQtd(qtd+1)}/>
                    </div>
                    <button onClick={addToCart}>Comprar</button>
                </Cart>
            </Bottom>
        </Body>
    )
}
const Body = styled.div`
    width: 206px;
    height: 241px;
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
        background-color: #c10000;
        border-radius: 5px;
        color:#fff;
        font-weight: 700;
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
`
const Minus = styled(AiOutlineMinusCircle)`
    font-size: 25px;
    color: #848484;
    margin-right: 5px;
`

