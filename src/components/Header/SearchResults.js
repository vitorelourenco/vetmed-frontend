import styled from "styled-components";
import Result from "./Result";

export default function SearchResults({ searchResults, className }) {
  return (
    <ResultsWrapper className={className}>
      <ul>
        {searchResults?.map((result) => ( <Result key={result.id} result={result}/>)) || "Nenhum resultado encontrado"}
      </ul>
    </ResultsWrapper>
  );
}

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
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
