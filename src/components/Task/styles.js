import tw, { styled } from "twin.macro";

const TaskStyles = styled.div`
  div {
    ${tw`container bg-white border shadow rounded m-5`}
  }
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
