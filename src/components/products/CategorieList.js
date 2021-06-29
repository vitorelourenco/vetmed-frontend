import { useEffect, useState } from "react";
import styled from "styled-components";
import Categorie from "./Categorie";

export default function CategorieList(){
    const [categories,setCategories] = useState([]);
    useEffect(()=>{

    },[])
    return (
        <Body>
            <MainCategories>
                <h1>Principais Categorias</h1>
                {categories.map(c=><Categorie/>)}
            </MainCategories>
            <ShowCategories>
                <button>Ver todas as categorias</button>
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

const MainCategories = styled.div`
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