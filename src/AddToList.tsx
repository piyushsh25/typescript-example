import { useState } from "react";
import { PeopleState } from "./App";
interface IProps {
  people: PeopleState["people"];
  setPeople: React.Dispatch<React.SetStateAction<PeopleState["people"]>>;
}
export const AddToList = ({ people, setPeople }: IProps) => {
  const [data, setData] = useState({
    name: "",
    url: "",
    age: "",
    note: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const addToListHandler = () => {
    setPeople((prev:IProps["people"]) => {
      return [
        ...prev,
        {
          name: data.name,
          url: data.url,
          age: Number(data.age),
          note: data.note,
        },
      ];
    });
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="url"
          name="url"
          value={data.url}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="age"
          name="age"
          value={data.age}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <textarea
          placeholder="note"
          value={data.note}
          name="note"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <button onClick={() => addToListHandler()}>Submit</button>
      </div>
    </>
  );
};
