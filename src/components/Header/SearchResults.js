import styled from "styled-components";

import { Link } from "react-router-dom";

export default function SearchResults({ searchResults, className }) {
  return (
    <ResultsWrapper className={className}>
      <ul>
        {searchResults?.map((result) => (
          <li>
            <Link to={result.url}>{result.name}</Link>
          </li>
        )) || "Nenhum resultado encontrado"}
      </ul>
    </ResultsWrapper>
  );
}

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  width: 100%;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 6px 0 15px 0;
  color: #333;
  font-size: 13px;
  padding: 18px;
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
