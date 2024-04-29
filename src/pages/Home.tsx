import React, { useState } from "react";
import { useSelector } from "react-redux";

import { UserData } from "../utils";

import Profil from "../components/Profil/Profil.tsx";
import SearchName from "../components/SearchName/SearchName.tsx";
import Content from "../components/Content/Content.tsx";
import { selectUserData } from "../store/reducer.ts";

import "./Home.scss";

const Home: React.FC = () => {
  const data = useSelector(selectUserData);
  console.log(data);

  const [nameId, setNameId] = useState<UserData | any>(null);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  if (!nameId) {
    setNameId(data[0]);
  }

  return (
    <div className="home">
      <div className="home__intro"></div>
      <div className="wrapper">
        <div className="home__content">
          <SearchName setNemeId={setNameId} />
          <div className="home__content--profil">
            <Profil nameId={nameId} />
            <Content nameId={nameId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
