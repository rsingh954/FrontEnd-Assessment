/* eslint-disable no-unused-vars */
import { FILTER_TAGS, SET_TAGS,CLEAR_FILTER } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SET_TAGS:
      return{
        ...state,
        tags: [...action.payload],
        filter:[]
      }
    case FILTER_TAGS:
      return{
        ...state,
        tags:[],
        filter: action.payload,
      }
      case CLEAR_FILTER:
        return{
          ...state,
          filter:[]
        }
    default:
      return state;
  }
};
