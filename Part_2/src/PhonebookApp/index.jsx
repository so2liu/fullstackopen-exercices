import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personService from "./services/persons";
import styles from "./index.module.css";
import Alarm from "./Alarm";

export default function PhonebookApp() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "Ada Lovelace" },
  ]);
  const [newPersonInfo, setNewPersonInfo] = useState({ name: "", number: "" });
  const [filterStr, setFilterStr] = useState("");
  const [alarm, setAlarm] = useState({
    display: false,
    type: "success",
    content: "",
  });

  useEffect(() => {
    personService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  async function onSubmit(e) {
    e.preventDefault();

    const index = persons.findIndex((p) => p.name === newPersonInfo.name);

    let res;

    try {
      if (
        index > -1 &&
        window.confirm(
          `${newPersonInfo.name} is already added to phonebook. Replace the old number with a new one?`
        )
      )
        res = await personService.update(persons[index].id, newPersonInfo);
      else res = await personService.create(newPersonInfo);

      setAlarm({
        display: true,
        type: "success",
        content: "Submit success!",
      });
    } catch (error) {
      setAlarm({
        display: true,
        type: "error",
        content: error.response.data.error,
      });
    } finally {
      await personService.getAll().then((data) => setPersons(data));
    }
  }

  async function onRemove(person) {
    if (!window.confirm(`Do you really want to delete ${person.name}?`)) return;

    try {
      await personService.remove(person.id);
    } catch (error) {
      setAlarm({ display: true, type: "error", content: error.message });
      console.error(error.toJSON());
    } finally {
      await personService.getAll().then((data) => setPersons(data));
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {alarm.display && <Alarm type={alarm.type} content={alarm.content} />}
      <Filter onChange={setFilterStr} />
      <h3>add a new</h3>
      <PersonForm onSubmit={onSubmit} onChange={setNewPersonInfo} />
      <h2>Numbers</h2>
      <Persons
        persons={persons.filter((p) =>
          p.name.toLowerCase().includes(filterStr)
        )}
        onRemove={onRemove}
      />
    </div>
  );
}
