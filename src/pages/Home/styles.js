import tw, { styled } from "twin.macro";

const HomeStyles = styled.div`
  main {
    ${tw`h-screen bg-customCream`}
  }
  h1 {
    ${tw`h-auto text-center bg-darkBrown text-5xl p-4 text-customCream `}
  }
`;

export default HomeStyles;
