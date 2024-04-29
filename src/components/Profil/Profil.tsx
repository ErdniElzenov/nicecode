import { UserData } from "../../utils";
import "./Profil.scss";
import React, { useState, useEffect, MouseEvent } from "react";

interface Props {
  nameId: UserData;
}

const Profil: React.FC<Props> = ({ nameId }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowContextMenu((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent | any) => {
    const menu = document.querySelector(".profil__menu");
    if (menu && !menu.contains(event.target as Node)) {
      setShowContextMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleEditItemClick = () => {
    console.log("Edit item clicked");
  };

  const handleDeleteItemClick = () => {
    console.log("Delete item clicked");
  };

  return (
    <div className="profil allBorder-radius">
      <div className="profil__avatar">
        <img
          className="profil__avatar--img"
          width={90}
          height={90}
          src={nameId.img}
          alt={nameId.name}
        />

        <div className="profil__avatar--text">
          {nameId.name} {nameId.surname}
          <div>
            {nameId.age} лет, {nameId.gender}
          </div>
        </div>
      </div>
      <div className="profil__settings" onClick={handleClick}>
        <button className="profil__settings--point">...</button>
      </div>
      {showContextMenu ? (
        <div className="profil__menu">
          <div className="profil__menu--item" onClick={handleEditItemClick}>
            Изменить
          </div>
          <div className="profil__menu--item" onClick={handleDeleteItemClick}>
            Удалить
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profil;
