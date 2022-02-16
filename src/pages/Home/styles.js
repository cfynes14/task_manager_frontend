import tw, { styled } from "twin.macro";

const HomeStyles = styled.div`
  main {
    ${tw`h-screen bg-colour1`}
  }
  h1 {
    ${tw`h-auto text-center text-5xl p-4 text-colour5 `}
  }
`;

export default HomeStyles;
