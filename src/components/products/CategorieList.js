import styled from "styled-components";

export default function CategorieList(){
    return (
        <Body>
            <MainCategories>

            </MainCategories>
            <ShowCategories>
                <button></button>
            </ShowCategories>
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    height: 308px;
    margin-top: 60px;
`

const MainCategories = styled.div`
    width: 100%;
    height: 267px;
    background-color: #fff;
    border-radius: 0px 0px 0px 67px;
`
const ShowCategories = styled.div`
    width: 100%;
    height: 41px;
    text-align: end;
        button{
            width: 298px;
            height: 100%;
            background-color: #fff;
            border: none;
            border-radius: 0px 0px 67px 67px;;
        }
`