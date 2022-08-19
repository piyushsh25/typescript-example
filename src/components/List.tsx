import React from "react";
type PeopleStatePropls = {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
};

export const List: React.FC<PeopleStatePropls> = ({ people }) => {
  const renderList = ():JSX.Element[] => {
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
  return <>
  {renderList()}
  </>;
};
