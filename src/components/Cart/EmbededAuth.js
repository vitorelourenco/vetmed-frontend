import styled from "styled-components";

export default function EmbededAuth(){

  return (
    <IFrameWrapper title="Embeded Authentication" src="/login"/>
  );
}

const IFrameWrapper = styled.iframe`
  width: 100%;
  height: 80vh;
`;

