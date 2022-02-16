import tw, { styled } from "twin.macro";

export const AccountStyles = styled.div`
  ${tw`bg-customCream`}
  h1 {
    ${tw`text-4xl text-center bg-darkBrown text-customCream py-3`}
  }
  h2.title {
    ${tw`text-2xl m-2`}
  }
  label {
    ${tw`block`}
  }
  input {
    ${tw`block border-gray-300 mb-4 ml-1 w-60 border-solid border rounded py-2 px-4`}
  }
  button {
    ${tw`bg-darkBrown hover:bg-lightBrown text-customCream font-bold mx-1 py-2 px-4 border border-lightBlack rounded`}
  }
`;

export const ImageStyles = styled.div`
  ${tw`absolute top-16 right-0`}
  img {
    ${`rounded`}
  }
`;
