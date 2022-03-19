import tw, { styled } from "twin.macro";

const ModalStyles = styled.div`
  h1 {
    ${tw`text-red-600 font-sans text-xl`}
  }
  form {
    ${tw`m-5 p-2 border-8 rounded`}
  }
  label {
    ${tw``}
  }
  input {
    ${tw`m-3 border-2 rounded`}
  }
  button {
    ${tw`bg-yellow-200 m-3 p-3 rounded hover:bg-yellow-500`}
  }
`;

export default ModalStyles;
