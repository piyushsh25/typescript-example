import React from "react";
import { PeopleState as PeopleStatePropls } from "../App";

export const List: React.FC<PeopleStatePropls> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <div style={{ border: "2px solid red" }}>
          <div>
            {person.name} {person.age}
          </div>
          <div>
            <>{person.note}</>
            {"    "}
            <>{person.url}</>
          </div>
        </div>
      );
    });
  };
  return <>{renderList()}</>;
};
