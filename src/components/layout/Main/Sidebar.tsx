import { useAppDispatch, useAppSelector } from "store";

import { CloseIcon } from "components/icons";
import Link from "next/link";
import Menu from "./Menu";
import React from "react";
import { pageNames } from "constant";
import { toggleSiderBar } from "store/modals";

const Sidebar = () => {
  const { sidebar } = useAppSelector((s) => s.modals);
  const dispatch = useAppDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleSiderBar());
  };

  return (
    <div
      className={`sidebar animate__animated ${
        sidebar ? "block" : "animate__fadeOutRight hidden"
      }`}>
      <div className="flex flex-col">
        <CloseIcon
          className="my-4 cursor-pointer"
          size={28}
          color="white"
          onClick={handleToggleMenu}
        />
        <Link href={pageNames.home}>
          <img
            src={"/images/logo.png"}
            // src={{ src: "/images/logo.png", height: 10, width: 10 }}
            className="rounded-2xl self-center w-16 h-16 cursor-pointer"
            alt=""
          />
        </Link>
      </div>
      <Menu />
      <div></div>
    </div>
  );
};

export default Sidebar;
