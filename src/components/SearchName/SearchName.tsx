import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "../../store/reducer.ts";
import { ReactComponent as SearchSvg } from "@/assets/img/search.svg";
import { ReactComponent as Filter } from "@/assets/img/Filter.svg";
import { ReactComponent as Plus } from "@/assets/img/Plus.svg";
import { ReactComponent as Close } from "@/assets/img/close.svg";
import "./SearchName.scss";
import { UserData } from "../../utils";

interface Props {
  setNemeId: (nameId: UserData) => void;
}

const SearchName: React.FC<Props> = ({ setNemeId }) => {
  const data = useSelector(selectUserData);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const [showCheck, setShowCheck] = useState<boolean>(true);
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );
  const [sumCheck, setSumCheck] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedItemId(index);
    setNemeId(data[index]);
  };

  const handleSearchClick = () => {
    setShowSearch(false);
  };

  const handleSearchClose = () => {
    setShowSearch(true);
  };

  const handleShowCheck = () => {
    setShowCheck((prev) => !prev);
  };

  const handleSelectAll = () => {
    const allSelected = checkboxStates.every((isChecked) => isChecked);
    const updatedStates = new Array(data.length).fill(!allSelected);
    setCheckboxStates(updatedStates);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index];
    setCheckboxStates(updatedStates);
  };

  useEffect(() => {
    const checkedCount = checkboxStates.filter((isChecked) => isChecked).length;
    setSumCheck(checkedCount);
  }, [checkboxStates]);

  return (
    <div className="SearchName">
      <div className="SearchName__search">
        {showSearch ? (
          <div className="SearchName__search--box">
            <button
              className="SearchName__search--button"
              onClick={handleSearchClick}
            >
              <SearchSvg />
            </button>
            <div>
              <button className="SearchName__search--button">
                <Filter />
              </button>
              <button className="SearchName__search--button">
                <Plus />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <input
              type="search"
              placeholder="Search..."
              className="SearchName__search--input"
            />
            <button
              className="SearchName__search--button"
              onClick={handleSearchClose}
            >
              <Close />
            </button>
          </div>
        )}
      </div>
      <div className="SearchName__filter">
        {showCheck ? (
          <React.Fragment>
            <span className="SearchName__filter--sum">{data.length}</span>
            <button
              className="SearchName__filter--button"
              onClick={handleShowCheck}
            >
              выбрать
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <label className="SearchName__filter--laible">
              <input
                type="checkbox"
                name="selectAll"
                className="checkbox"
                checked={checkboxStates.every((isChecked) => isChecked)}
                onChange={handleSelectAll}
              />
              Все <div className="SearchName__filter--all">{sumCheck}</div>
            </label>
            <div>
              <button className="SearchName__filter--button">действие</button>
              <button
                onClick={handleShowCheck}
                className="SearchName__filter--button"
              >
                отмена
              </button>
            </div>
          </React.Fragment>
        )}
      </div>

      <div className="SearchName__users">
        {data.map((card, index) => (
          <div
            key={index}
            className={`SearchName__users--item ${
              selectedItemId === index ? "selected" : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
            <div className="content">
              {!showCheck ? (
                <input
                  type="checkbox"
                  name="languages"
                  checked={checkboxStates[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              ) : (
                ""
              )}
              <img
                className="content__img"
                width={40}
                height={40}
                src={card.img}
                alt=""
              />
              <span className="content__name">
                {card.name} {card.surname}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchName;
