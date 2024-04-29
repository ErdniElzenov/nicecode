import React, { useState } from "react";

import { UserData } from "../../utils";

import Consultations from "./Tabs/consultation.tsx";
import Notes from "./Tabs/notes.tsx";
import Videos from "./Tabs/video.tsx";
import Events from "./Tabs/event.tsx";

import "./Content.scss";

interface Props {
  nameId: UserData;
}

const Content: React.FC<Props> = ({ nameId }: Props) => {
  const [activeTab, setActiveTab] = useState<string>("notes");

  const handleTabClick = (index: string) => {
    setActiveTab(index);
  };

  const addName = {
    notes: {
      add: "Новая заметка",
      content: <Notes nameId={nameId} />,
    },
    consultation: {
      add: "Запись",
      content: <Consultations nameId={nameId} />,
    },
    video: {
      add: "Рекомендовать",
      content: <Videos nameId={nameId} />,
    },
    event: {
      add: "Рекомендовать",
      content: <Events nameId={nameId} />,
    },
  };
  return (
    <div className="content">
      <div className="content__mine">
        <div className="content__mine--home">
          <button
            key="notes"
            className={"notes" === activeTab ? "active" : ""}
            onClick={() => handleTabClick("notes")}
          >
            Заметки
          </button>
          <button
            key="consultation"
            className={"consultation" === activeTab ? "active" : ""}
            onClick={() => handleTabClick("consultation")}
          >
            Консультация
          </button>
          <button
            key="video"
            className={"video" === activeTab ? "active" : ""}
            onClick={() => handleTabClick("video")}
          >
            Видео
          </button>
          <button
            key="event"
            className={"event" === activeTab ? "active border" : "border"}
            onClick={() => handleTabClick("event")}
          >
            Мероприятие
          </button>
        </div>
        <div className="content__mine--add">
          <span className="content__mine--text">{addName[activeTab].add}</span>
          <img className="content__mine--img" src="./img/add.svg" alt="" />
        </div>
      </div>
      <div className="content__event allBorder-radius">
        {addName[activeTab].content}
      </div>
    </div>
  );
};

export default Content;
