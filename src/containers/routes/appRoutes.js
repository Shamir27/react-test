import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../../views/Home";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/"
        element={<MainLayout />}
      >
        <Route exact path={''} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
