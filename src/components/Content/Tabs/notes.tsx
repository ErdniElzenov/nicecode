import React from "react";

import { UserData, Note } from "../../../utils";

import "./index.scss";

interface Props {
  nameId: UserData;
}

const Notes: React.FC<Props> = ({ nameId }: Props) => (
  <div className="notes">
    {nameId.notes.map((item: Note, index: number) => (
      <div key={index} className="notes__item">
        <p>
          <span>{item.data}</span>
          {item.text}
          <p>{item.img && <img src={item.img} alt={item.text} />}</p>
        </p>
      </div>
    ))}
  </div>
);

export default Notes;
