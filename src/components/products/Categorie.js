import styled from "styled-components";

export default function Categorie({categorie,color}){
    return(
        <Body color={color}>
            
        </Body>
    );
}
const Body = styled.li`
    height: 189px;
    width: 156px;
    color:${props=>props.color}

`