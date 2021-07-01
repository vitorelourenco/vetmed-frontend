import { Dialog,DialogContent,DialogTitle,DialogActions } from "@material-ui/core";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";

export default function ProductDescription({open,product,setIsOpen,qtd,setQtd,addToCart,cart,setCart}){
    return(
        <Dialog open={open}  onClose={()=>{setIsOpen(false)}}>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogContent>
                <Top>
                    <Img src={product.img} alt={product.name}/> 
                    <Cart>
                        <div>
                            <Minus onClick={()=>qtd>0 && setQtd(qtd-1)}/>
                            {qtd}
                            <Plus onClick={()=>setQtd(qtd+1)}/>
                        </div>
                        <span>R${(product.price/100).toFixed(2).replace('.',',')}</span>
                        <button onClick={()=>{addToCart(qtd,product,setQtd,cart,setCart);setIsOpen(false)}}>Comprar</button>
                    </Cart>
                </Top>
                <div>
                    <hr/>
                    <Title>Sobre O Produto</Title>
                    <span>{product.description}</span>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{setIsOpen(false)}}>Sair</Button>
            </DialogActions>
        </Dialog>
    )
}

const Img = styled.img`
    max-width: 400px;
    min-width: 320px;
    max-height: 400px;
    min-height: 320px;
    border-radius: 5px;
    margin-right: 20px;
`
const Top = styled.div`
    display: flex;
    
`
const Title = styled.div`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
`
const Button = styled.button`
    border: none;
    color: var(--vivid-red);
    background-color: inherit;
    position: absolute;
    top: 10px;
    right: 10px;
`
const Cart = styled.div`
    max-height: 400px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    button{
            border: none;
            background-color: #c10000;
            border-radius: 5px;
            color:#fff;
            font-weight: 700;
            margin-top: 10px;
    }
    div{
        display: flex;
        align-items: center;
        text-align: center;
        margin-bottom: 10px;
        font-size: 30px;
    }
`

const Plus = styled(AiOutlinePlusCircle)`
    color: #848484;
    margin-left: 5px;
`
const Minus = styled(AiOutlineMinusCircle)`
    color: #848484;
    margin-right: 5px;
`

