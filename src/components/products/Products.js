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
    const [pageNumber,setPageNumber] = useState(1)
    console.log(products)
    useEffect(()=>{
        if(id){
            const promise = axios.get(`http://localhost:4000/products/?id=${id}&limit=8&offset=${(pageNumber-1)*8}`)
            promise.then(res=>{
                console.log(res.data)
                setProducts(res.data.products)
                setTitle(res.data.name);
            })
        }
        else{
            const promise = axios.get(`http://localhost:4000/products?limit=8`)
            promise.then(res=>{
                setProducts(res.data.products)
                setTitle('Os Mais Vendidos');
            })
        }
    },[id,pageNumber])
    return (
        <Body>
            <CategorieList/>
            <Title>{title}</Title>
            <ProductsList length={products.length}>
                {products?.map(p=><Product key={p.id}  product={p}/>)}
            </ProductsList> 
            {
                id && products?.length>8 && <Next onClick={()=>setPageNumber(pageNumber+1)}>Proxima pagina</Next>
            }
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
    height: 532px;
    display: flex;
    flex-direction: ${props=>props.length<8 ?'column':'row'};
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 11%;
    width: 1300px;
    margin: 0 auto;
    @media(max-width:1300px){
        width: 100%;
    }
`
const Next = styled.div`
    padding: 0 11% 10px  11%;
    width: 100%;
    text-align: end;
    color: #FF4949;
`