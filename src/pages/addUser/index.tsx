import * as yup from "yup";

import { IButton, IInput } from "components/general";

import { Formik } from "formik";
import { ILoading } from "components";
import { MainLayout } from "components/layout";
import React from "react";
import { pageNames } from "constant";
import { useI18Next } from "i18n";
import { usePostUserMutation } from "store/service/user";
import { useRouter } from "next/router";

const AddUser = () => {
  const { t } = useI18Next();
  const { replace } = useRouter();
  const [postUser, { isLoading }] = usePostUserMutation();
  const validationSchema = yup.object({
    first_name: yup
      .string()
      .required(t("message.required", { fieldName: t("general.firstName") }))
      .min(
        2,
        t("message.minLength", { fieldName: t("general.firstName"), length: 2 })
      )
      .max(
        10,
        t("message.maxLength", {
          fieldName: t("general.firstName"),
          length: 10,
        })
      ),
    last_name: yup
      .string()
      .required(t("message.required", { fieldName: t("general.lastName") }))
      .min(
        2,
        t("message.minLength", { fieldName: t("general.lastName"), length: 2 })
      )
      .max(
        10,
        t("message.maxLength", {
          fieldName: t("general.lastName"),
          length: 15,
        })
      ),
    mobile: yup
      .string()
      .required(t("message.required", { fieldName: t("general.mobile") }))
      .length(
        11,
        t("message.length", { fieldName: t("general.mobile"), length: 11 })
      ),
  });

  const handleFinish = async (params: {
    mobile: string;
    first_name: string;
    last_name: string;
  }) => {
    try {
      await postUser(params);
      replace(pageNames.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout pageHeader={t("general.addUser")}>
      <Formik
        initialValues={{ mobile: "", first_name: "", last_name: "" }}
        validationSchema={validationSchema}
        onSubmit={handleFinish}>
        {({ values, handleChange, errors, touched, handleSubmit }) => (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="md:grid-cols-2 grid w-full grid-cols-1 gap-2 p-4 border">
              <IInput
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                error={touched.first_name && errors.first_name}
                placeholder={t("general.inputPlaceHolder", {
                  fieldName: t("general.firstName"),
                })}
                label={t("general.firstName")}
              />
              <IInput
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                error={touched.last_name && errors.last_name}
                placeholder={t("general.inputPlaceHolder", {
                  fieldName: t("general.lastName"),
                })}
                label={t("general.lastName")}
              />
              <IInput
                name="mobile"
                value={values.mobile}
                error={touched.mobile && errors.mobile}
                onChange={handleChange}
                placeholder={t("general.inputPlaceHolder", {
                  fieldName: t("general.mobile"),
                })}
                label={t("general.mobile")}
              />
              <IButton
                className="col-span-full  px-12 py-1"
                loading={isLoading}
                type="submit">
                {t("general.submit")}
              </IButton>
            </div>
          </form>
        )}
      </Formik>
    </MainLayout>
  );
};

export default AddUser;
