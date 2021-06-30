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
            const promise = axios.get(`http://localhost:4000/products?limit=8&offset=${(pageNumber-1)*8}`)
            promise.then(res=>{
                setProducts(res.data.products)
                setTitle(res.data.name);
            })
        }
    },[id,pageNumber])
    return (
        <Body>
            <CategorieList/>
            <Title>{title}</Title>
            <ProductsList length={products?.length}>
                {products?.map(p=><Product key={p.id}  product={p}/>)}
            </ProductsList> 
            
            <ChangePage page={pageNumber}>
            {pageNumber>1 && <Back onClick={()=>setPageNumber(pageNumber-1)}>Pangina anterior</Back>}
            {
                id && products?.length===8 && <Next onClick={()=>setPageNumber(pageNumber+1)}>Proxima pagina</Next>
            }
            {
                !id && products?.length===8 && <Next onClick={()=>setPageNumber(pageNumber+1)}>Veja Mais...</Next>
            }
            </ChangePage>
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
    flex-direction: row;
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
const ChangePage = styled.div`
width: 100%;
display: flex;
justify-content: ${props=>props.page===1?'flex-end':'space-between'};
`
const Next = styled.button`
    padding: 0 11% 10px  11%;
    text-align: end;
    color: #FF4949;
    border: none;
`
const Back = styled.button`
    padding: 0 11% 10px  11%;
    text-align: start;
    color: #FF4949;
    border: none;
`

    
