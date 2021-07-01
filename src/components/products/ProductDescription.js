import { Dialog,DialogContent,DialogTitle,DialogActions } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

export default function ProductDescription({open,product,setIsOpen}){
    return(
        <Dialog open={open} onBackdropClick={()=>{setIsOpen(false)}} onClose={()=>{setIsOpen(false)}}>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogContent>
                <Img src={product.img} alt={product.name}/>
                <Description>
                    <hr/>
                    <Title>Sobre O Produto</Title>
                    <span>{product.description}</span>
                </Description>
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
    border-radius: 5px;
`
const Description = styled.div`

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