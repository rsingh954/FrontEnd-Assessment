/* eslint-disable no-unused-vars */
import { GET_STUDENTS,FILTER_STUDENTS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,

      }
    case FILTER_STUDENTS:
      return{
        ...state,
        filter: action.payload
      }
    default:
      return state;
  }
};
