import styled from "styled-components";
import CategorieList from "../categorieMenu/CategorieList";

export default function Products(){
    return (
        <Body>
            <CategorieList/>
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    height: 100vh;
`