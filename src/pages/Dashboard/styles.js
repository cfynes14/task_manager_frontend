import tw, { styled } from "twin.macro";

const DashStyles = styled.div`
  main {
    ${tw`h-screen overflow-auto bg-colour1`}
  }

  div.dashContainer {
    ${tw`pb-2`}
  }
  div.wrapper {
    ${tw`ml-16 md:ml-0 flex flex-wrap justify-between`}
  }
  h2 {
    ${tw`text-colour5 text-4xl text-center font-sans mb-5 pt-5`}
  }
  button {
    ${tw`bg-colour3 hover:bg-colour2 text-colour1 font-bold mx-1 py-2 px-4 border border-colour4 rounded`}
  }
  select {
    ${tw`w-52 rounded`}
  }
`;

export default DashStyles;
