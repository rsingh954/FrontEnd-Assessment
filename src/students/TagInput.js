import React, {useState, useContext} from "react";

import StudentContext from '../context/students/studentContext'

//Have to populate student state with new students with tag props
export const TagInput = () => {
  const [tags, setTags] = useState([]);
  const studentContext = useContext(StudentContext)

  const addTags = (event) => {
    if (event.key === "Enter") {
      let val = event.target.value
      let id =event.target.parentElement.parentElement.id

      const { students, filter, setStudents } = studentContext
      let myTags = [...tags] 
      setTags([
          ...tags,
          val
        ]
      )
      myTags.push(event.target.value)
      let arrayStudents = filter.length <= 0 ? students: filter
      const filterStudents = 
      arrayStudents.filter((student) => {
        if(student.id === id){
          student.tags ? student.tags.push(val) : student.tags = [val]
        }
        return students
      })
      setStudents(filterStudents)
      setTags([])
      event.target.value = "";
    }
  };
  return (
    <div>
      <input
        className="tag-input"
        type="text"
        onKeyDown={(event) => addTags(event)}
        placeholder="Press enter to add tags"
      />
    </div>
  );
};
export default TagInput;
