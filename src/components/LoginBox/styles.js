// import styled from "styled-components";
import tw, { styled } from "twin.macro";

const LoginForm = styled.div`
  div {
    ${tw`w-0.5 mx-auto mt-40 w-80 border-solid bg-white rounded shadow`}
  }
  h2 {
    ${tw`m-5 text-colour4 pt-5 text-lg`}
  }
  p {
    ${tw`ml-5 hover:text-blue-500`}
  }
  form {
    ${tw`p-5`}
  }
  label {
    ${tw`block`}
  }
  input {
    ${tw`block border-gray-300 mb-4 ml-1 w-60 border-solid border rounded py-2 px-4`}
  }
  button {
    ${tw`bg-green-500 hover:bg-green-700 text-white font-bold mx-1 py-2 px-4 border border-blue-700 rounded`}
  }
`;

// const LoginForm = tw.form`border-black`;

export default LoginForm;

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// h2,
// p {
//   display: inline;
// }

// h2 {
//   margin-left: 5%;
// }

// p {
//   margin-left: 20%;
// }

// .loginWrapper {
//   border-radius: 5px;
//   height: 100%;
//   width: 60%;
//   margin: 20% 20%;
//   border: solid black 1px;
//   box-shadow: 5px 5px 40px -3px rgba(0, 0, 0, 0.81);
// }

// .boxElement {
//   display: block;
//   margin: 2%;
// }

// .loginForm {
//   margin-top: 2%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// }

// .loginButton {
//   height: 3em;
//   border-radius: 5px;
// }
