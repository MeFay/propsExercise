import { FC } from "react";
import { StyledStudentDiv, StyledStudent } from "./Styles.ts";

type StudentProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

const Student: FC<StudentProps> = ({
  name = "Guest",
  age = 0,
  isStudent = false,
}) => {
  return (
    <StyledStudentDiv>
      <StyledStudent>Name: {name}</StyledStudent>
      <StyledStudent>Age: {age}</StyledStudent>
      <StyledStudent>Student: {isStudent ? "Yes" : "No"}</StyledStudent>
    </StyledStudentDiv>
  );
};

export default Student;
