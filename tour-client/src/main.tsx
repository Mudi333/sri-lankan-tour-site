import "leaflet/dist/leaflet.css";
import "./index.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "@/pages/Home";
import Tours from "@/pages/Tours";
import Errorpage from "@/pages/ErrorPage";

import Register from "@/pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,

    children: [
      { index: true, element: <Home /> },
      { path: "tours", element: <Tours /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
