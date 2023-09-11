import React from "react";
import HeaderCom from "../components/Header";
import { Route, Routes } from "react-router-dom";
import MapPage from "../pages/MapPage";

const AllRoutes = () => {
  const containerStyle = {
    backgroundColor: "#f7f7f7",
    padding: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <HeaderCom />
      <Routes>
        <Route path="/" element={<MapPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
