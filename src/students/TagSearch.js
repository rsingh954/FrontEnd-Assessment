import React, { useContext, useState } from "react";
import TagContext from "../context/tags/tagContext";
import StudentContext from "../context/students/studentContext";

export const TagSearch = () => {
  const tagContext = useContext(TagContext);
  const studentContext = useContext(StudentContext)

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

  };
  const onChange = (e) => {
    const { filterTags, clearFilter } = tagContext;
    let { students } = studentContext;
    
    setText(e.target.value);
    filterTags(students, e.target.value);
    if(e.target.value === ""){clearFilter()}
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit} action="">
        <input
          placeholder="Search by tag"
          value={text}
          name="text"
          type="text"
          onChange={onChange}
        ></input>
      </form>
    </div>
  );
};
export default TagSearch;
