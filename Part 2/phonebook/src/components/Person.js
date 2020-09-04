import React from "react";

const Person = ({ name, phone, deletePhoneNumber }) => {
  return (
    <li>
      {name} {phone}
      <button onClick={deletePhoneNumber}>Delete Phone</button>
    </li>
  );
};

export default Person;
