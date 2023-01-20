import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Orders from "./Orders";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Orders/>} path={'/'} />
        <Route element={<Orders/>} path={'/orders'} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
