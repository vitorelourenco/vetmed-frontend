import styled from "styled-components"


export default function Result({result}){
    
    return (
        <Body>
            <img src={result.img} alt={result.name}/>
            <span onClick>{result.name}</span>
        </Body>
    )
}

const Body = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    color:  var(--vivid-red);
    img{
        width:30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
    }
    &:hover{
        cursor: pointer;
    }

`