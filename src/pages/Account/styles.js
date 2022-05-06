import tw, { styled } from "twin.macro";

export const AccountStyles = styled.div`
  ${tw`bg-colour1 h-screen`}
  div.accountContainer {
    ${tw`m-10`}
  }
  h1 {
    ${tw`text-4xl text-center bg-colour3 text-colour1 py-3`}
  }
  h2.title {
    ${tw`mb-5 text-2xl`}
  }
  label {
    ${tw`mt-3 block`}
  }
  input {
    ${tw`mt-3 block w-3/6 border-gray-300 border-solid border rounded py-2 px-4`}
  }
  button {
    ${tw`bg-colour3 hover:bg-colour2 text-colour1 font-bold mx-1 py-2 px-4 border border-colour4 rounded`}
  }

  .button-container {
    ${tw`mt-5`}
  }

  .delete-button {
    ${tw`hover:bg-red-600`}
  }
`;

export const ImageStyles = styled.div`
  ${tw`max-h-full max-w-lg p-4 float-right border border-gray-900`}
  img {
    ${tw`m-auto rounded-3xl`}
  }
  label {
    ${tw`block`}
  }
  input {
    ${tw`block w-full`}
  }
  .button-container {
    ${tw`flex justify-center m-3 border`}
  }
`;
