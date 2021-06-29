import styled from "styled-components";

export default function MainCategorie({categorie,color}){
    return(
        <Body color={color}>
            <span>teste</span>
        </Body>
    );
}
const Body = styled.div`
    height: 189px;
    width: 156px;
    color:${props=>props.color}

`