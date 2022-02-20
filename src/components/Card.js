import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import TagInput from "../students/TagInput";

export const Card = ({
  student: {
    firstName,
    lastName,
    pic,
    email,
    company,
    skill,
    grades,
    id,
    tags,
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const average = (arr) =>
    arr.reduce((a, b) => Number(a) + Number(b), 0) / arr.length;

  return (
    <div className="card ">
      <img className="round-img" src={pic} alt="avatar" />
      <div className="info">
        <h1 className="name">
          {firstName.toUpperCase() + " " + lastName.toUpperCase()}
        </h1>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {average(grades)}%</p>
        {isOpen && (
          <ul className="collapse-content">
            {grades.map((grade, i) => (
              <li key={i}>
                Test {i + 1}: {grade}%
              </li>
            ))}
          </ul>
        )}
        <div className="tags-input" id={id}>
          <ul>
            {tags?.map((tag, index) => (
              <li key={index}>
                <span className="tag">{tag}</span>
              </li>
            ))}
          </ul>
          <TagInput />
        </div>
      </div>

      <button className="show" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FontAwesomeIcon icon={faMinus} size="3x" color="gray" />
        ) : (
          <FontAwesomeIcon icon={faPlus} size="3x" color="gray" />
        )}
      </button>
    </div>
  );
};
export default Card;
