import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../layout/navbar";

type Props = {};

function UsersRoot({}: Props) {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default UsersRoot;
