import Link from "next/link";
import React from "react";
import { pageNames } from "constant";
import { useI18Next } from "i18n";

const Footer = () => {
  const { t } = useI18Next();
  return (
    <div className="py-8 mt-8 bg-gray-dark">
      <div className="main__container flex items-end ">
        <Link href={pageNames.home}>
          <img
            src="/images/logo.png"
            className="rounded-3xl w-24 h-24 cursor-pointer"
            alt=""
          />
        </Link>
        <div className="flex flex-col mx-4 text-white text-sm font-bold">
          <p className="font-bold">{t("general.poweredBy")}</p>
          <a
            className="cursor-pointer"
            href="mailto:developer.ghahremani@gmail.com">
            developer.ghahremani@gmail.com
          </a>
          <a href="https://rezaghahremani.ir" target="_blank">
            rezaghahremani.ir
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
