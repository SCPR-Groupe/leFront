import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";

const LayooutSimple = () => {
  return (
    <div className="w-full h-screen bg-sombre">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayooutSimple;
