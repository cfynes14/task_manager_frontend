import tw, { styled } from "twin.macro";

const DashStyles = styled.div`
  div.dashContainer {
    ${tw`bg-lightBlack pb-2`}
  }
  h2 {
    ${tw`text-customCream text-4xl text-center font-sans mb-5 pt-5`}
  }
  button {
    ${tw`bg-darkBrown hover:bg-lightBrown text-customCream font-bold mx-1 py-2 px-4 border border-lightBlack rounded`}
  }
  p {
    ${tw`inline text-customCream m-5`}
  }
  select {
    ${tw`w-52 rounded`}
  }
`;

export default DashStyles;
