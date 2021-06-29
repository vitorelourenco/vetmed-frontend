import styled from "styled-components";
import logo39 from "../assets/images/vetmed-logo39.png";

export default function Header(){
  return (
    <>
      <HeaderBackground />
      <HeaderWrapper>
        <div className="pageheader--logobox">
          <p className="logobox--text">vet<br/>med</p>
          <img src={logo39} alt="VETMET LOGO" />
        </div>
        <div className="pageheader--menu">

        </div>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(90deg, white, white 50%, #FF4949 50%, #FF4949 100%);
  display: flex;
  position: relative;

  .pageheader--logobox{
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding: 14px 10px 9px 10px;
    height: 62px;
    z-index: 1;

    .logobox--text{
      font-size: 18px;
      line-height: 19px;
      color: var(--dark-red);
      font-family: "Syncopate";
      text-align: center;
    }

    .logobox--img{

    }
  }

  .pageheader--menu{
    flex: 1 1 100%;
    display: flex;
    background-color: var(--vivid-red);
    height: 62px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 8px;
    z-index: 1;

    .menu--searchbar{
      flex: 1 1 100%;
    }
  }
`;


const HeaderBackground = styled.div`
  background-image: linear-gradient(90deg, white, white 50%, #FF4949 50%, #FF4949 100%);
  height: 62px;
  width: 100vw;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
`;
