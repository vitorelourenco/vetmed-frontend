import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Categorie from "./Categorie";
import MainCategorie from "./MainCategorie";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function CategorieList({setPageNumber}) {
  const [categories, setCategories] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const color = ["#58479A", "#9A7E47", "#479A86", "#9A4797", "#9A4747"];
  const width = useMediaQuery("(min-width:751px)");
  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/categories?main=true`
    );
    promise.then((res) => {
      setCategories(res.data);
    });
    promise.catch(() => alert("Houve um erro ao carregar as categorias"));
  }, []);

  function toggleCategories() {
    if (!showAll) {
      const promise = axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/categories`
      );
      promise.then((res) => {
        setShowAll(true);
        setCategories(res.data);
      });
      promise.catch(() => alert("Houve um erro ao carregar as categorias"));
    } else {
      const promise = axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/categories?main=true`
      );
      promise.then((res) => {
        setShowAll(false);
        setCategories(res.data);
      });
      promise.catch(() => alert("Houve um erro ao carregar as categorias"));
    }
  }

  return (
    <Body>
      {(width || showAll) && (
        <h1>{showAll ? "Todas as categorias" : "Principais Categorias"}</h1>
      )}
      {(width || showAll) && (
        <Categories>
          {showAll ? (
            categories?.map((c) => (
              <Categorie
                toggleCategories={toggleCategories}
                key={c.id}
                categorie={c}
                setPageNumber={setPageNumber}
              />
            ))
          ) : (
            <div>
              {categories?.map((c) => (
                <MainCategorie
                  key={c.id}
                  categorie={c}
                  color={color[c.id - 1]}
                  setPageNumber={setPageNumber}
                />
              ))}
            </div>
          )}
        </Categories>
      )}
      <ShowCategories>
        <button onClick={toggleCategories}>
          {width && showAll ? "Principais Categorias" : "Todas as categorias"}
        </button>
      </ShowCategories>
    </Body>
  );
}

const Body = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  color: #ff4949;
  z-index: 1;
  h1 {
    text-align: center;
    padding: 15px 0;
    font-size: 24px;
    width: 100%;
    background-color: #fff;
  }
  @media (min-width: 750px) {
    height: 308px;
    margin-top: 60px;
  }
  @media (max-width: 750px) {
    position: fixed;
    margin-top: 0;
    top: 62px;
    left: 0;
  }
  @media (max-width: 588px) {
    position: fixed;
    top: 106px;
    left: 0;
  }
`;

const Categories = styled.ul`
  width: 100%;
  background-color: #fff;
  padding: 0 11%;
  list-style-type: disc;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: "Viga", sans-serif;
  
  & > div {
    display: flex;
    justify-content: space-around;
    gap: 5px;
  }

  @media (min-width: 750px) {
    border-radius: 0px 0px 0px 67px;
  }

  @media (min-width: 750px) {
    height: 180px;
  }

  @media (min-width: 900px) {
    height: 200px;
  }
`;
const ShowCategories = styled.div`
  width: 100%;
  height: 41px;
  text-align: end;
  button {
    width: 298px;
    height: 100%;
    background-color: #fff;
    border: none;
    border-radius: 0px 0px 67px 67px;
    color: inherit;
    @media (max-width: 750px) {
      width: 100%;
    }
  }
  button:hover {
    cursor: pointer;
  }
`;
