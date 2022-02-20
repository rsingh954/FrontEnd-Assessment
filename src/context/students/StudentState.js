/* eslint-disable no-unused-vars */
import React, { useReducer,useContext } from 'react';
import axios from 'axios';
import StudentContext from './studentContext'
import StudentReducer from './studentReducer'
import { GET_STUDENTS,FILTER_STUDENTS,FILTER_TAGS, SET_TAGS } from "../types";

const StudentState = props => {
  const initialState = {
    students: [],
    filter:[],
  }
  const [ state, dispatch ] = useReducer(StudentReducer, initialState);

  const getStudents = async () => {
    const res = await axios.get('https://api.hatchways.io/assessment/students');
    dispatch({
      type: GET_STUDENTS,
      payload: res.data.students
    })
  };
  const filterStudents = (obj, name, keyCode) => {
    const filter = obj.filter((o) => {
      const fullName = o.firstName.toLowerCase() + " " +  o.lastName.toLowerCase()
      return fullName.includes(name.toLowerCase())
    })
    dispatch({
      type: FILTER_STUDENTS,
      payload: filter
    })
  }
  const setStudents = (students) => {
    dispatch({
      type: GET_STUDENTS,
      payload: students
    })
  }

  return <StudentContext.Provider value={{
    students:state.students,
    filter: state.filter,
    getStudents,
    filterStudents,
    setStudents
  }}>
  {props.children}
  </StudentContext.Provider>
}

export default StudentState;