import tw, { styled } from "twin.macro";

const ModalStyles = styled.div`
  ${tw`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-96 bg-white border-black rounded`}

  .modal-container {
    ${tw`border-2 rounded`}
  }

  h1 {
    ${tw`ml-6 mt-3 text-red-600 font-sans text-xl`}
  }
  p {
    ${tw`m-7`}
  }
  form {
    ${tw`p-2 rounded`}
  }
  label {
    ${tw`m-4 `}
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
    ${tw`bg-yellow-200 w-5/6 mx-7 my-3 py-3 rounded hover:bg-yellow-500`}
  }
`;

export default ModalStyles;
