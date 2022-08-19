import { useState } from "react";
import { AddToList } from "./AddToList";
import "./App.css";
import { List } from "./components/List";
// tutorial link : https://www.youtube.com/watch?v=jrKcJxF0lAU&t=1066s
export type PeopleState = {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
};
const App = () => {
  const initialPerson = {
    name: "Piyush",
    url: "www",
    age: 20,
    note: "string",
  };
  const [people, setPeople] = useState<PeopleState["people"]>([initialPerson]);

  return (
    <>
      <h1 className="heading">People invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </>
  );
};

export default App;
