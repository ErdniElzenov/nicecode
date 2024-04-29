import React from "react";

import { UserData, Event } from "../../../utils";

import "./index.scss";

interface Props {
  nameId: UserData;
}

const Events: React.FC<Props> = ({ nameId }: Props) => (
  <div className="event">
    {nameId.event.map((item: Event, index: number) => (
      <div key={index} className="item allBorder-radius">
        <div className="block">
          <img
            className=""
            width={82}
            height={46}
            src={item.image}
            alt={item.title}
          />
          <div className="event__text text">
            <div>{item.title}</div>
            <div className="event__text--buttom">
              <span className="event__text--name">
                <img
                  width={15}
                  height={15}
                  src="./img/video-camera.svg"
                  alt=""
                />
                <span> {item.type}</span>
              </span>
              <span className="event__text--name">
                <img
                  width={15}
                  height={15}
                  src="./img/calendar (1).svg"
                  alt=""
                />
                <span> {item.data}</span>
              </span>
              <span className="event__text--name">
                <img width={15} height={15} src="./img/Time.svg" alt="" />
                <span> {item.time}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Events;
