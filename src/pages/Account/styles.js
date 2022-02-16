import tw, { styled } from "twin.macro";

export const AccountStyles = styled.main`
  ${tw`bg-colour1 h-screen`}
  div.accountContainer {
    ${tw`m-5`}
  }
  h1 {
    ${tw`text-4xl text-center bg-colour3 text-colour1 py-3`}
  }
  h2.title {
    ${tw`text-2xl m-2`}
  }
  label {
    ${tw`block`}
  }
  input {
    ${tw`block border-gray-300 mb-4 ml-1 w-96 border-solid border rounded py-2 px-4`}
  }
  button {
    ${tw`bg-colour3 hover:bg-colour2 text-colour1 font-bold mx-1 py-2 px-4 border border-colour4 rounded`}
  }
`;

export const ImageStyles = styled.div`
  ${tw`absolute top-16 right-0`}
  img.avatar {
    ${`rounded`}
  }
  label {
    ${tw`block`}
  }
  input {
    ${tw`block`}
  }
`;
