import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Categorie from "./Categorie";
import MainCategorie from "./MainCategorie";

export default function CategorieList(){
    const [categories,setCategories] = useState(null);
    const [showAll,setShowAll] = useState(false);
    useEffect(()=>{
        setCategories([{id:1,name:'capsulas',img:''}, {id:2,name:'colirios',img:''},{id:3,name:'higiene',img:''},{id:4,name:'sprays',img:''},{id:5,name:'geis',img:''}]);
    },[]);

    function toggleCategories(){
        if(showAll){
            const promise = axios.get('http://localhost:4000/categories')
            promise.then(res=>{
                setShowAll(true);
                setCategories(res.body);
            }); 
            promise.catch(()=>alert('Houve um erro ao carregar as categorias'))
        }
        else{
            setCategories([{id:1,name:'capsulas',img:''}, {id:2,name:'colirios',img:''},{id:3,name:'higiene',img:''},{id:4,name:'sprays',img:''},{id:5,name:'geis',img:''}]);
            setShowAll(false);
        }
        
    }

    return (
        <Body>
            <Categories>
                <h1>{showAll ? 'Principais Categorias':'Todas as categorias'}</h1>
                {categories.map(c=> showAll ? <Categorie key={c.id} categorie={c}/>:<MainCategorie key={c.id} categorie={c}/>)}
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

`

const Categories = styled.ul`
    width: 100%;
    height: 267px;
    background-color: #fff;
    border-radius: 0px 0px 0px 67px;
    h1{
        text-align: center;
        padding: 15px 0;
        font-size: 24px;
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
        }
`