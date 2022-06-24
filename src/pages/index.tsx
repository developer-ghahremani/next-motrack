import { MainLayout } from "components/layout";
import React from "react";
import { range } from "lodash";
import { useI18Next } from "i18n";

const Home = () => {
  const { t } = useI18Next();
  return (
    <MainLayout>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 justify-between gap-4">
          <div className="col-span-4">
            <p className="font-bold text-lg">{t("general.projectTitle")}</p>
            <p className="mt-3">{t("general.projectDetail")}</p>
          </div>
          <div className="col-span-1 justify-end flex">
            <img
              src="/images/logo.png"
              className="w-28 h-28 rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
        <p className="font-bold text-lg">{t("general.projectTools")}</p>
        {range(1, 8).map((item) => (
          <p className="mt-2 subway-item" key={item}>
            {t(`general.projectDescription${item}`)}
          </p>
        ))}
        <p className="text-secondary font-bold text-lg mt-4">
          {t("general.projectWarning")}
        </p>
      </div>
    </MainLayout>
  );
};

export default Home;
