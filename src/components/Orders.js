import styled from "styled-components"

export default function Orders(){
    return(
        <Body>
            Rota em Progresso...
        </Body>
    )
}
const Body = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 62px);
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 35px;
    color: var(--vivid-red);
`