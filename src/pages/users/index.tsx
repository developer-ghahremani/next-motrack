import { MainLayout } from "components/layout";
import React from "react";
import { Users as UserList } from "components";

const Users = () => {
  return (
    <MainLayout>
      <UserList />
    </MainLayout>
  );
};

export default Users;
