import styled from "styled-components";
import CategorieList from "./CategorieList";

export default function Products(){
    return (
        <Body>
            <CategorieList/>
        </Body>
    );
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
`