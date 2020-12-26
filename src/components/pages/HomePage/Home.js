import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import HeroSection from "../../pages/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

function Home() {
  const { userData } = useContext(UserContext);
  return (
    <>
      <div className="page">
        {userData.user ? (
          <h1>Welcome {userData.user.displayName}</h1>
          
        ) : (
          <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
