import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MainCategorie({categorie,color}){
    return(
        <Link to={`/categories/${categorie.id}`}>
            <Body>
                <Figure color={color}>
                    <img src={categorie.img} alt={categorie.name}/>
                </Figure>
                <Name color={color}>{categorie.name}</Name>
            </Body>
        </Link>
        
    );
}
const Body = styled.div`
    height: 189px;
    max-width: 156px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Name = styled.span`
    color:${props=>props.color};
`
const Figure = styled.div`
    max-width: 156px;
    height: 156px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 70%;
        height: 70%;
    }
`