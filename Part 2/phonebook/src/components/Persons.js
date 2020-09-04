import React from "react";
import Person from "./Person";

const Persons = ({ people, deletePhoneNumber }) => {
  console.log(people);
  return (
    <ul>
      {people.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          phone={person.number}
          deletePhoneNumber={() => deletePhoneNumber(person.id)}
        />
      ))}
    </ul>
  );
};

export default Persons;
