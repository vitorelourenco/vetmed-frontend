import styled from "styled-components";

export default function MainCategorie({categorie,color}){
    return(
        <Body >
            <Figure color={color}>
                <img src={categorie.img} alt={categorie.name}/>
                
            </Figure>
            <span color={color}>{categorie.name}</span>
        </Body>
    );
}
const Body = styled.div`
    height: 189px;
    width: 156px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
    color:${props=>props.color};
    }
    
`
const Figure = styled.div`
    width: 156px;
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