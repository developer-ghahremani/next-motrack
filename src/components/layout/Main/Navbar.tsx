import { FoldMenuIcon, UnFoldMenuIcon } from "components/icons";
import { useAppDispatch, useAppSelector } from "store";

import React from "react";
import { toggleSiderBar } from "store/modals";
import { useI18Next } from "i18n";

const Navbar = () => {
  const { sidebar } = useAppSelector((s) => s.modals);
  const { user } = useAppSelector((s) => s.favoritedUser);
  const dispatch = useAppDispatch();
  const { t } = useI18Next();

  const handleToggleSidebar = () => {
    dispatch(toggleSiderBar());
  };

  return (
    <div className="bg-gray-light">
      <div className="main__container !max-w-4xl flex items-center justify-between py-4">
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
        <p className="text-sm">
          {t("general.hi", {
            name: user
              ? user.firstName + " " + user.lastName
              : t("general.guest"),
          })}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
