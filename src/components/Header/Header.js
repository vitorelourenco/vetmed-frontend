import styled from "styled-components";
import logo39 from "../../assets/images/vetmed-logo39.png";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { AuthedUserOptions, GuestUserOptions } from "./userOptions";
import MenuCheckout from "./MenuCheckout";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import SearchResults from "./SearchResults";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);
  const [searchResults, setSearchResults] = useState(null);
  const isAuthed = user ? true : false;
  const [focus,setFocus] = useState(false)
  const local = useLocation();
  console.log(local.pathname)
  if(local.pathname==='/signup'||local.pathname==='/login') return null
  return (
    <>
      <HeaderBackground />
      <HeaderWrapper>
        <div className="pageheader--logobox">
          <p className="logobox--text">
            vet
            <br />
            med
          </p>
          <img src={logo39} alt="VETMET LOGO" />
        </div>
        <div className="pageheader--menu">
          <div className="menu--searchbarContainer">
            <DebounceInput
              className="searchbarContainer--searchbar"
              placeholder="O que você está buscando?"
              minLength={3}
              debounceTimeout={300}
              onFocus={(e)=>e.target.value.length> 2 && setFocus(true)}
              onBlur={()=>setFocus(false)}
              onChange={(e) => {
                searchProducts(e.target.value, setSearchResults,setFocus);
              }}
            />
            {focus &&
            (
              <SearchResults
                className="searchbarContainer--results"
                searchResults={searchResults}
              />
            ) }
          </div>
          {isAuthed ? <AuthedUserOptions /> : <GuestUserOptions />}
          <MenuCheckout />
        </div>
      </HeaderWrapper>
    </>
  );
}

function searchProducts(keyword, setSearchResults,setFocus) {
  if (keyword === "") {
    setSearchResults(null);
    setFocus(false)
    return;
  }
  setFocus(true)
  axios
    .get(`http://localhost:4000/products/search?product=${keyword}`)
    .then(({ data }) => {
      data.length===0 ? setSearchResults(null):setSearchResults(data) ;
    })
    .catch((err) => alert(err));
}

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1200px;
  background-image: linear-gradient(
    90deg,
    white,
    white 50%,
    #ff4949 50%,
    #ff4949 100%
  );
  display: flex;
  position: fixed;
  top: 0;
  left: calc(50% - 600px);
  @media(max-width:1200px){
    left: 0;
  }
  .pageheader--logobox {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding: 14px 10px 9px 10px;
    height: 62px;
    z-index: 1;
    background-color: white;

    @media (max-width: 588px) and (min-width: 400px) {
      flex: 1 1 100%;
      justify-content: center;
    }

    .logobox--text {
      font-size: 18px;
      line-height: 19px;
      color: var(--dark-red);
      font-family: "Syncopate";
      text-align: center;
    }
  }

  .pageheader--menu {
    flex: 1 1 100%;
    display: flex;
    gap: 30px;
    background-color: var(--vivid-red);
    height: 62px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 8px;
    z-index: 1;

    @media (max-width: 768px) {
      gap: 15px;
      justify-content: center;
      border-radius: 0;
    }

    .menu--searchbarContainer {
      flex: 1 1 100vw;

      @media (max-width: 588px) {
        flex: initial;
        width: 100vw;
        position: absolute;
        top: 61px;
        left: 0;
        background-color: var(--vivid-red);
        height: 45px;
        padding: 10px;
      }

      .searchbarContainer--searchbar {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        font-size: 22px;
        border: none;
        padding: 10px;

        @media (max-width: 768px) {
          font-size: 18px;
        }
      }

      .searchbarContainer--searchbar::placeholder {
        color: #848484;
        text-align: center;
      }

      .searchbarContainer--results {
        width: calc(100% - 20px);
        margin-left: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-height: 20vh;
      }
    }
  }
`;

const HeaderBackground = styled.div`
  background-image: linear-gradient(
    90deg,
    white,
    white 50%,
    #ff4949 50%,
    #ff4949 100%
  );
  height: 62px;
  width: 100%;
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
`;
