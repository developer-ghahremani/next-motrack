import { FoldMenuIcon, UnFoldMenuIcon } from "components/icons";
import { useAppDispatch, useAppSelector } from "store";

import React from "react";
import { toggleSiderBar } from "store/modals";

const Navbar = () => {
  const { sidebar } = useAppSelector((s) => s.modals);
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSiderBar());
  };

  return (
    <div className="bg-gray-200">
      <div className="main__container flex items-center justify-between py-4">
        <div>
          {!sidebar ? (
            <FoldMenuIcon
              className="cursor-pointer"
              onClick={handleToggleSidebar}
              size={20}
            />
          ) : (
            <UnFoldMenuIcon
              className="cursor-pointer"
              onClick={handleToggleSidebar}
              size={20}
            />
          )}
        </div>
        <p>khubi</p>
      </div>
    </div>
  );
};

export default Navbar;
