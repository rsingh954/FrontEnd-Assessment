/* eslint-disable no-unused-vars */
import React, { useReducer, useContext } from "react";
import TagReducer from "./tagReducer";
import TagContext from "./tagContext";
import StudentContext from "../students/studentContext";
import { FILTER_TAGS, SET_TAGS, CLEAR_FILTER } from "../types";


const TagState = (props) => {
  const initialState = {
    tags: [],
    filter: [],
  };
  const [state, dispatch] = useReducer(TagReducer, initialState);
  const studentContext = useContext(StudentContext)

  //This will give us all students but with a tag property. 
  const tagArray = (tags) => {
    tags.push(...state.tags);
    dispatch({
      type: SET_TAGS,
      payload: tags,
    });
  };
  const filterTags = (obj, name) => {
    const filter = obj.filter((o) => {
    if(name === ''){
      return []
    }
      if(o.tags?.toString().includes(name)){
        return o
      }
    })
    dispatch({
      type: FILTER_TAGS,
      payload: filter,
    });
    return filter
  };
  const clearFilter = () => {
    dispatch({
      type:CLEAR_FILTER,
    })
  }
  return (
    <TagContext.Provider
      value={{
        tags: state.tags,
        filter: state.filter,
        filterTags,
        tagArray,
        clearFilter
      }}
    >
      {props.children}
    </TagContext.Provider>
  );
};

export default TagState;
