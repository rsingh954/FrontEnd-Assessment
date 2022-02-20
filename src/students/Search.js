import React, { useContext, useState } from "react";
import StudentContext from "../context/students/studentContext";
export const Search = () => {
  const studentContext = useContext(StudentContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    const { filterStudents, students } = studentContext;
    setText(e.target.value);
    filterStudents(students, e.target.value, e.keyCode);
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit} action="">
        <input
          placeholder="Search by name"
          value={text}
          name="text"
          type="text"
          onChange={onChange}
          onKeyDown={onChange}
        ></input>
      </form>
    </div>
  );
};
export default Search;
