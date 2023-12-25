import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./routes/routers";
import { DatePicker } from "antd";

const router = createBrowserRouter(routers);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
