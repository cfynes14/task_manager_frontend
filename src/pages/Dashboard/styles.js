import tw, { styled } from "twin.macro";

// const DashStyles = (props) => {
//   return (
//     <main tw="h-screen bg-colour1">
//       <div className="dashContainer" tw="h-screen"></div>
//     </main>
//   );
// };

const DashStyles = styled.div`
  main {
    ${tw`h-screen bg-colour1`}
  }

  div.dashContainer {
    ${tw`pb-2`}
  }
  div.wrapper {
    ${tw`flex flex-wrap justify-between`}
  }
  h2 {
    ${tw`text-colour5 text-4xl text-center font-sans mb-5 pt-5`}
  }
  button {
    ${tw`bg-colour3 hover:bg-colour2 text-colour1 font-bold mx-1 py-2 px-4 border border-colour4 rounded`}
  }
  p {
    ${tw`inline text-colour1 m-5`}
  }
  select {
    ${tw`w-52 rounded`}
  }
`;

export default DashStyles;
