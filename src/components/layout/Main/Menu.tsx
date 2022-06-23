import Link from "next/link";
import React from "react";
import { pageNames } from "constant";
import { useI18Next } from "i18n";

const options: { title: string; to: string }[] = [
  { title: "users", to: pageNames.users },
  { title: "addUser", to: pageNames.addUser },
];
type Props = {};

const Menu = () => {
  const { t } = useI18Next();
  return (
    <div>
      {options.map((option) => (
        <Link href={option.to} key={option.title} className="cursor-pointer">
          <p className="cursor-pointer">{t(`general.${option.title}`)}</p>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
