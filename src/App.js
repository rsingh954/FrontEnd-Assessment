import React from "react";
import StudentState from "./context/students/StudentState";
import TagState from "./context/tags/TagState";
import Students from "./students/Students";
import Search from "./students/Search";
import TagSearch from "./students/TagSearch";
import "./App.css";

const App = () => {
  return (
    <StudentState>
      <TagState>
        <div className="app">
          <Search />
          <TagSearch />
          <Students />
        </div>
      </TagState>
    </StudentState>
  );
};

export default App;
