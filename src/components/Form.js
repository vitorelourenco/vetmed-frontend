import styled from "styled-components";

const Form = styled.form.attrs((props) => ({
  onSubmit: (e) => {
    e.preventDefault();
    props.customSubmit();
  },
}))`
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-size: 20px;
  width: 100%;

  input {
    height: 58px;
    line-height: 58px;
    padding: 0 15px 0 15px;
    color: black;
  }

  button {
    height: 46px;
    font-weight: bold;
    background-color: var(--vivid-red);
    cursor: pointer;
    color: white;
  }

  input,
  button {
    width: 100%;
    border-radius: 5px;
    border: none;
    &:disabled {
      filter: brightness(0.8);
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default Form;
