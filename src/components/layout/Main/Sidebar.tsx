import Img from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import React from "react";
import { pageNames } from "constant";
import { useAppSelector } from "store";

const Sidebar = () => {
  const { sidebar } = useAppSelector((s) => s.modals);
  return (
    <div
      className={`sidebar animate__animated ${
        sidebar ? "block" : "animate__fadeOutRight hidden"
      }`}>
      <Link href={pageNames.home}>
        <img
          src={"/images/logo.png"}
          // src={{ src: "/images/logo.png", height: 10, width: 10 }}
          className="rounded-2xl w-16 h-16 cursor-pointer"
          alt=""
        />
      </Link>
      <Menu />
      <div></div>
    </div>
  );
};

export default Sidebar;
