import React from "react";

const Languages = ({ languages }) => {
  return (
    <div>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
