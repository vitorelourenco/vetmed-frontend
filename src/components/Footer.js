import styled from "styled-components";

export default function Footer(){
  return (
  <FooterWrapper>
    <p>vetmed ltda</p>
  </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  height: 62px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--vivid-red);
`;