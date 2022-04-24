// import styled from "styled-components";
import tw, { styled } from "twin.macro";

const NewUserStyles = styled.div`
  main {
    ${tw`h-screen bg-colour1`}
  }
  h1 {
    ${tw`text-center text-3xl text-colour1 font-serif bg-colour3 p-4`}
  }
  div.newUserForm {
    ${tw`mx-auto mt-10 w-4/12 border-solid bg-white rounded shadow`}
  }
  h2 {
    ${tw`m-5 text-colour4 pt-5 text-lg`}
  }
  p {
    ${tw`ml-5`}
  }
  form {
    ${tw`px-5 pb-5`}
  }
  label {
    ${tw`block mb-2`}
  }
  input {
    ${tw`block border-gray-300 mb-4 ml-1 w-11/12 border-solid border rounded py-2 px-4`}
  }
  button {
    ${tw`bg-green-500 hover:bg-green-700 text-white font-bold mx-1 py-2 px-4 border border-blue-700 rounded`}
  }
`;

// const LoginForm = tw.form`border-black`;

export default NewUserStyles;
