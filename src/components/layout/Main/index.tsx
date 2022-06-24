import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";
import Sidebar from "./Sidebar";

type Props = { children: React.ReactNode; pageHeader?: string | JSX.Element };

const MainLayout = (props: Props) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Navbar />
        <div className="main__container min-h-screen pt-16">
          {typeof props.pageHeader === "string" ? (
            <p className="mb-12 text-lg font-bold">{props.pageHeader}</p>
          ) : (
            props.pageHeader
          )}
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
