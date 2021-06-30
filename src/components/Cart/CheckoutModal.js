import React from 'react';
import ReactModal from "react-modal";
import styled from 'styled-components';

ReactModal.defaultStyles.overlay.zIndex = 5;

export default function CheckoutModal({setShowCheckoutModal}){
  function ExitModal(){
    return (
      <p style={{cursor:"pointer", flexShrink:"0", height: "100%"}} onClick={()=>setShowCheckoutModal(false)}>x</p>
    )
  }
  return (
    <StyledModal
      isOpen={true}
      contentLabel="User location map"
    >
      <Header>
        <ExitModal />
      </Header>
    </StyledModal>
  );
}

const StyledModal = styled(ReactModal)`
    top: 50vh;
    left: 50vw;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    max-width: 790px;
    width: 100%;
    background: var(--vivid-red);
    border-radius: 20px;
    user-select: none;

    position: absolute;
    z-index: 5;
    padding: 7px 37px 33px 37px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 38px;
  line-height: 56px;
  color: white;
  font-weight: bold;
  font-family: Oswald, "sans-serif";
  margin-bottom: 8px;
  word-break: break-all;
`;