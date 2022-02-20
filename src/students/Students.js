import React, { useContext, useEffect } from "react";
import StudentContext from "../context/students/studentContext";
import TagContext from "../context/tags/tagContext";
import Card from "../components/Card";

export const Students = () => {
const studentContext = useContext(StudentContext);
const tagContext = useContext(TagContext)
  const { students, getStudents, filter } = studentContext;
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="card-container text-center">
      { tagContext.filter.length === 0 ? filter.length <= 0
        ? students.map((student) => <Card key={student.id} student={student} />)
        : filter.map((student) => <Card key={student.id} student={student} />) :
         tagContext.filter.map((student) => <Card key={student.id} student={student} />)}
    </div>
  );
};
export default Students;
