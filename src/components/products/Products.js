import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CategorieList from "../categorieMenu/CategorieList";
import Product from "./Product";

export default function Products(){
    const [products,setProducts] = useState(null)
    const {id} = useParams();
    const [title,setTitle]= useState("");
    useEffect(()=>{
        if(id){
        }
        else{
            const promise = axios.get(`http://localhost:4000/products?limit=8`)
            promise.then(res=>{
                setProducts(res.data)
                setTitle('Os Mais Vendidos');
            })
        }
    },[id])
    return (
        <Body>
            <CategorieList/>
            <Title>{title}</Title>
            <ProductsList>
            {products?.map(p=><Product key={p.id}  product={p}/>)}
            
            </ProductsList>
            
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    height: 100vh;
`
const Title = styled.h1`
    margin: 31px 0;
    text-align: center;
    color: #333333;
    font-weight: 700;
    font-size: 24px;
`
const ProductsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 11%;
    width: 1300px;
    margin: 0 auto;
    @media(max-width:1300px){
        width: 100%;
    }
`