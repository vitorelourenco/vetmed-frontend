import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

import { Link } from "react-router-dom";


const SearchInput = styled(DebounceInput)`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 8px;
    font-family: "Lato", sans-serif;
    font-size: 19px;
    line-height: 23px;
`;

const ResultsHolder = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 6px 0 15px 0;
    ::-webkit-scrollbar-track {
        background-color: #f4f4f4;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: #f4f4f4;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }
`;

const UserLink = styled(Link)`
    display: flex;
    align-items: center;
    font-family: "Lato", sans-serif;
    padding-left: 17px;
    margin: 8px 0;

    p {
        color: #515151;
    }

    span {
        color: #c5c5c5;
    }
`;

export {
    SearchInput,
    ResultsHolder,
    UserLink,
};