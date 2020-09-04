import React, { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import FilterPerson from "./components/FilterPerson";
import phoneService from "./services/phones";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notificationMessage, setnotificationMessage] = useState("");
  const [notificationtype, setnotificationtype] = useState("");
  let personsToShow = persons;

  useEffect(() => {
    phoneService.getAll().then((initialPeople) => {
      setPersons(initialPeople);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const PersonObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.filter((e) => e.name === newName).length > 0) {
      if (window.confirm(`Would you like to edit ${newName}`)) {
        const person = persons.find((n) => n.name === newName);
        const changePerson = { ...person, number: newNumber };

        phoneService
          .update(changePerson.id, changePerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== changePerson.id ? person : returnedPerson
              )
            );
            setnotificationMessage(
              `${PersonObject.name} had his details updated`
            );
            setTimeout(() => {
              setnotificationMessage(null);
            }, 5000);
            setnotificationtype("success");
          });
      }
    } else {
      phoneService.create(PersonObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setnewNumber("");
        setnotificationMessage(`${PersonObject.name} was added to the server`);
        setTimeout(() => {
          setnotificationMessage(null);
        }, 5000);
        setnotificationtype("success");
      });
    }
  };

  const deletePhoneNumber = (id) => {
    if (window.confirm("Do you really want to delte the user?")) {
      phoneService
        .deletePerson(id)
        .then((returnedPerson) => {
          setPersons(
            persons.map((note) => (note.id !== id ? note : returnedPerson))
          );
        })
        .catch((error) => {
          setnotificationMessage(
            `that person was already removed from the server`
          );
          setTimeout(() => {
            setnotificationMessage(null);
          }, 5000);
          setnotificationtype("error");
          setPersons(persons.filter((n) => n.id !== id));
        });
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setnewNumber(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  personsToShow = persons.filter((person) => {
    console.log(persons);
    if (person.name) {
      return person.name.toUpperCase().includes(search.toUpperCase());
    }
    return null;
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} type={notificationtype} />
      <FilterPerson search={search} handler={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons people={personsToShow} deletePhoneNumber={deletePhoneNumber} />
    </div>
  );
};

export default App;
