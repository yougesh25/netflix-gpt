import React from "react";

const Header = () => {
  return (
    <div className="relative w-12/12 z-10">
      <img
        className="w-60 h-30 absolute top-0 left-0  object-cover font-bold bg-gradient-to-b from-black "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
    </div>
  );
};

export default Header;
