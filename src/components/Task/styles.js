import tw, { styled } from "twin.macro";

const TaskStyles = styled.div`
  ${tw`m-4 rounded border shadow`}
  h3 {
    ${tw`text-colour4 bg-colour2 p-2 font-sans`}
  }
  p {
    ${tw`block text-colour3`}
  }
  button.taskButton {
    ${tw`m-3`}
  }
`;

export default TaskStyles;
