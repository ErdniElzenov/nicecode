import React, { useState } from "react";
import { UserData, Consultation } from "../../../utils";

import "./index.scss";

interface Props {
  nameId: UserData;
}

const Consultations: React.FC<Props> = ({ nameId }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const Logo: Record<string, string> = {
    consultation: "Combined Shap",
    reception: "Combined Shape",
  };

  return (
    <div className="consultation">
      {nameId.consultation.map((item: Consultation, index: number) => (
        <div key={index} className="item allBorder-radius">
          <div
            className="block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="consultation__img"
              style={{
                backgroundColor: hoveredIndex === index ? "#4198c5" : "#f1f2f3",
              }}
            >
              <img
                className={item.type}
                src={
                  hoveredIndex === index
                    ? `./img/${Logo[item.type]}Hover.svg`
                    : `./img/${Logo[item.type]}.svg`
                }
                alt={item.title}
              />
            </div>

            <div className="consultation__text text">
              <div>{item.title}</div>
              <span>{item.data}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Consultations;
