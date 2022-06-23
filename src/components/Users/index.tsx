import { DeleteIcon, HeartIcon } from "components/icons";
import { IInput, ITable } from "components/general";
import React, { useState } from "react";
import { useDeleteUserMutation, useGetUsersQuery } from "store/service/user";

import { ILoading } from "components";
import Popup from "reactjs-popup";
import { stringifyUrl } from "query-string";
import { toggleWarningModal } from "store/modals";
import { useAppDispatch } from "store";
import { useI18Next } from "i18n";
import { useRouter } from "next/router";

const Users = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const dispatch = useAppDispatch();
  const { query, push, pathname } = useRouter();
  const { page = "1" } = query;
  const { t } = useI18Next();
  const [deleteUser] = useDeleteUserMutation();
  const { isFetching, data, refetch } = useGetUsersQuery({
    page: typeof page === "string" ? page : "1",
  });

  const warningDelete = (name: string, id: number) => {
    const handleDelete = async () => {
      try {
        await deleteUser({ id }).unwrap();
        refetch();
      } catch (error) {
        console.log(error);
      }
    };

    dispatch(
      toggleWarningModal({
        open: true,
        message: t("message.deleteWarning", { fieldName: name }),
        onOK() {
          handleDelete();
        },
      })
    );
  };

  const handleChangePage = (p: number) => {
    push(stringifyUrl({ url: pathname, query: { page: p } }));
  };

  const hadeSearch = (search: string) => {
    setSearchPhrase(search);
  };

  if (isFetching) return <ILoading />;
  if (!data) return <p>error</p>;
  return (
    <div>
      <div className="md:flex-row flex flex-col items-center justify-between mb-16">
        <p className="text-lg font-bold">{t("general.users")}</p>
        <IInput
          onChange={(e) => hadeSearch(e.target.value)}
          placeholder={t("general.searchBy", {
            fieldName: t("general.firstName"),
          })}
          className="w-[20rem]"
          value={searchPhrase}
        />
      </div>
      <ITable
        className="p-4 border"
        data={data.users.filter((item) =>
          !!searchPhrase
            ? item.firstName
                .toLowerCase()
                .startsWith(searchPhrase.toLowerCase())
            : true
        )}
        headerClassName="text-red-600 text-center"
        columns={[
          {
            fieldName: "firstName",
            title: "نام و نام خانوادگی",
            render: (data) => <p>{data.firstName + " " + data.lastName}</p>,
          },
          {
            fieldName: "mobile",
            title: "شماره موبایل",
          },
          {
            title: "عملیات",
            fieldName: "TTT",
            render: (data) => (
              <div className="flex justify-end">
                <DeleteIcon
                  size={22}
                  className="bg-opacity-10 text-red-600 bg-red-600 border rounded-lg cursor-pointer"
                  onClick={() =>
                    warningDelete(data.firstName + " " + data.lastName, data.id)
                  }
                />
                <p className="mx-2"></p>
                <HeartIcon
                  filled={false}
                  size={22}
                  className="bg-opacity-10 text-red-600 bg-red-600 border rounded-lg cursor-pointer"
                />
              </div>
            ),
          },
        ]}
        pagination={{
          page: +page,
          perPage: 20,
          total: data.total,
          onChange: handleChangePage,
        }}
      />
    </div>
  );
};

export default Users;
