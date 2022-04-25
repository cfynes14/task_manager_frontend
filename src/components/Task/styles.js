import tw, { styled } from "twin.macro";

const TaskStyles = styled.div`
  width: 30%%;

  ${tw`sm:w-1/2 md:w-1/4 lg:w-2/12 m-3 rounded border shadow`}

  h3 {
    ${tw`text-colour4 text-center bg-colour2 p-2 font-sans truncate`}
  }
  p {
    ${tw`block mt-2 text-center text-colour3`}
  }

  .button-container {
    ${tw`w-full flex items-stretch`}
  }

  button.taskButton {
    ${tw`m-3`}
  }
`;

export default TaskStyles;
