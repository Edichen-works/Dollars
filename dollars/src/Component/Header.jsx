import React from "react";
import LOGO from "./IMG/Logo";

const Header = () => {
  return (
    <div className="border border-black block ml-auto mr-auto w-1/2 h-auto">
      <img className="h-24 w-auto ml-auto mr-auto" src={LOGO} alt="LogPhoto" />
    </div>
  );
};

export default Header;
