import Navbar from "./Navbar";
import React from "react";
import Sidebar from "./Sidebar";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  return (
    <div>
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="main__container pt-16">{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
