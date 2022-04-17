import tw, { styled } from "twin.macro";

const ModalStyles = styled.div`
  h1 {
    ${tw`m-3 text-red-600 font-sans text-xl`}
  }
  form {
    ${tw`p-2 rounded`}
  }
  label {
    ${tw`m-2`}
  }
  .text-input {
    ${tw`w-5/6 m-3 border-2 rounded`}
  }
  .radio-input {
    ${tw`m-3`}
  }
  section {
    ${tw`w-full flex items-stretch`}
  }
  button {
    ${tw`bg-yellow-200 w-5/6 m-3 py-3 rounded hover:bg-yellow-500`}
  }
`;

export default ModalStyles;
