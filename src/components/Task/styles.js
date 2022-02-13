import tw, { styled } from "twin.macro";

const TaskStyles = styled.div`
  ${tw`m-4 rounded border shadow`}
  h3 {
    ${tw`text-lightBlack bg-lightBrown p-2 font-sans`}
  }
  p {
    ${tw`block text-lightBlack`}
  }
  button.taskButton {
    ${tw`m-3`}
  }
`;

export default TaskStyles;
