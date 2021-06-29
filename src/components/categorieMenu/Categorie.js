import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Categorie({categorie}){
    return(
        <Link to={`/categories/${categorie.id}`}>
            <Body >
                {categorie.name}
            </Body>
        </Link>
    );
}
const Body = styled.li`
    margin-bottom: 10px;
`