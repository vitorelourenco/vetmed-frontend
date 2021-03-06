import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CategorieList from "../categorieMenu/CategorieList";
import Product from "./Product";

export default function Products(){
    //send a message to parent element when accessed (used for iframe logic)
    window.parent.postMessage('url_changed', '*');

    const [products,setProducts] = useState(null)
    const {id} = useParams();
    const [title,setTitle]= useState("");
    const [pageNumber,setPageNumber] = useState(1)

    useEffect(()=>{
        if(id){
            const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/?id=${id}&limit=8&offset=${(pageNumber-1)*8}`)
            promise.then(res=>{
                setProducts(res.data.products)
                setTitle(res.data.name);
            })
        }
        else{
            const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/products?limit=8&offset=${(pageNumber-1)*8}`)
            promise.then(res=>{
                setProducts(res.data.products)
                setTitle(res.data.name);
            })
        }
    },[id,pageNumber])
    return (
        <Body>
            <CategorieList setPageNumber={setPageNumber}/>
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
    @media(max-width:750px){
        margin-top: 134px;
    }
    @media(max-width:588px){
        margin-top: 178px;
    }
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
    justify-content: center;
    gap: 35px;
    align-items: center;
    padding: 0 11%;
    max-width: 1220px;
    padding-left: 72px;
    padding-right: 72px;
    width: 100%;
    margin: 0 auto;
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

    
