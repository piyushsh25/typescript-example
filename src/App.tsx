import { useState } from "react";
import "./App.css";
import { List } from "./components/List";
// tutorial link : https://www.youtube.com/watch?v=jrKcJxF0lAU&t=1066s
const App = () => {
  type PeopleState = {
    people: {
      name: string;
      url: string;
      age: number;
      note?: string;
    }[];
  };
  const initialPerson={
    name: "Piyush",
    url: "www",
    age: 20,
    note: "string"
  }
  const [people, setPeople] = useState<PeopleState["people"]>([initialPerson]);

  return (
    <>
      <h1 className="heading">People invited to our party</h1>
      <List people={people}/>
    </>
  );
};

export default App;
 