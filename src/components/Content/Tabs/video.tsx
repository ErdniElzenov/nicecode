import React from "react";

import { UserData, Video } from "../../../utils";

import "./index.scss";

interface Props {
  nameId: UserData;
}

const Videos: React.FC<Props> = ({ nameId }: Props) => (
  <div className="video">
    {nameId.video.map((item: Video, index: number) => (
      <div key={index} className="item allBorder-radius">
        <div className="block">
          <img
            className=""
            width={82}
            height={46}
            src={item.image}
            alt={item.title}
          />
          <div className="video__text text">
            <div>{item.title}</div>
            <div className="video__data">
              <span>{item.name}</span>
              <span>{item.data}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Videos;
