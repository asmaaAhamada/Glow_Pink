import React from "react";
import SidPar from "./sidePar";
import { Outlet } from "react-router-dom";
import NavPage from "../navPar";

export default function DashboardLayout() {
  return (
    <>
    <NavPage/>
      <SidPar />
      
    </>
  );
}
