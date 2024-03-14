import React from "react";
import { StyledStudentDiv, StyledStudent } from "./Styles.ts";

interface Props {
  name: string;
  age: number;
  isStudent: boolean;
}

const Student: React.FC<Props> = (props) => {
  return (
    <StyledStudentDiv>
      <StyledStudent>Name: {props.name}</StyledStudent>
      <StyledStudent>Age: {props.age}</StyledStudent>
      <StyledStudent>Student: {props.isStudent ? "Yes" : "No"}</StyledStudent>
    </StyledStudentDiv>
  );
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Student;
