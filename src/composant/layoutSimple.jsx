import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";

const LayooutSimple = () => {
  return (
    <div className="w-full">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayooutSimple;
