import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Categorie from "./Categorie";
import MainCategorie from "./MainCategorie";

export default function CategorieList(){
    const [categories,setCategories] = useState(null);
    const [showAll,setShowAll] = useState(false);
    const color = ['#58479A','#9A7E47','#479A86','#9A4797','#9A4747']
    useEffect(()=>{
        const promise = axios.get('http://localhost:4000/categories?main=true')
        promise.then(res=>{
            setCategories(res.data);
        }); 
        promise.catch(()=>alert('Houve um erro ao carregar as categorias'))
    },[]);

    function toggleCategories(){
        if(!showAll){
            const promise = axios.get('http://localhost:4000/categories')
            promise.then(res=>{
                setShowAll(true);
                setCategories(res.data);
            }); 
            promise.catch(()=>alert('Houve um erro ao carregar as categorias'))
        }
        else{
            const promise = axios.get('http://localhost:4000/categories?main=true')
            promise.then(res=>{
                setShowAll(false);
                setCategories(res.data);
            }); 
            promise.catch(()=>alert('Houve um erro ao carregar as categorias'))
        }
        
    }

    return (
        <Body>
            <h1>{showAll ? 'Todas as categorias':'Principais Categorias'}</h1>
            <Categories>
                {showAll ? categories?.map(c=> <Categorie key={c.id} categorie={c}/>):<div>{categories?.map(c=> <MainCategorie key={c.id} categorie={c} color={color[c.id-1]}/>)}</div>}
            </Categories>
            <ShowCategories>
                <button onClick={toggleCategories}>{showAll ? 'Principais Categorias':'Todas as categorias'}</button>
            </ShowCategories>
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    height: 308px;
    margin-top: 60px;
    color: #FF4949;
    h1{
        text-align: center;
        padding: 15px 0;
        font-size: 24px;
        width: 100%;
        background-color: #fff;
    }
`

const Categories = styled.ul`
    width: 100%;
    height: 213px;
    background-color: #fff;
    border-radius: 0px 0px 0px 67px;
    padding: 0 11%;
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    div{
        display: flex;
        justify-content: space-around;
    }
`
const ShowCategories = styled.div`
    width: 100%;
    height: 41px;
    text-align: end;
        button{
            width: 298px;
            height: 100%;
            background-color: #fff;
            border: none;
            border-radius: 0px 0px 67px 67px;
            color:inherit;
        }
        button:hover{
            cursor: pointer;
        }
`