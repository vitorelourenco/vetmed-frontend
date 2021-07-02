import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MainCategorie({categorie,color}){
    return(
        <StyledLink to={`/categories/${categorie.id}`}>
            <ResponsiveCategory>
                <Body>
                    <Figure color={color}>
                        <img src={categorie.img} alt={categorie.name}/>
                    </Figure>
                </Body>
                <Name color={color}>{categorie.name}</Name>
            </ResponsiveCategory>
        </StyledLink>
        
    );
}

const StyledLink = styled(Link)`
    flex: 1 1 156px;
    max-width: 156px;
    position: relative;
`;

const ResponsiveCategory = styled.div`
    position: absolute;
    width: 100%;
    padding-bottom: calc(100% + 33px);
`;

const Body = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100%);
`;

const Name = styled.span`
    left: 0;
    top: calc(100% - 33px);
    position: absolute;
    color:${props=>props.color};
    width: 100%;
    text-align: center;
    display: block;
    margin-top: 10px;
`
const Figure = styled.div`
    width: 100%;
    height: calc(100% - 33px);
    border-radius: 50%;
    background-color: ${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 60%;
        height: 60%;
    }
`