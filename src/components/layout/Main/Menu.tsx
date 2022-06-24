import Link from "next/link";
import React from "react";
import { pageNames } from "constant";
import { useI18Next } from "i18n";
import { useRouter } from "next/router";

const options: { title: string; to: string }[] = [
  { title: "users", to: pageNames.users },
  { title: "addUser", to: pageNames.addUser },
];

const Menu = () => {
  const { t } = useI18Next();
  const { route } = useRouter();
  return (
    <div>
      {options.map((option) => (
        <Link href={option.to} key={option.title}>
          <p
            className={`cursor-pointer text-center font-bold mt-4 ${
              route === option.to ? "text-white" : ""
            }`}>
            {t(`general.${option.title}`)}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
