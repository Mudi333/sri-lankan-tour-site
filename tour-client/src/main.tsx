import "leaflet/dist/leaflet.css";

import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/layout.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "@/pages/Home/Home";
import Tours from "./pages/Tours";
import Errorpage from "./pages/ErrorPage";
import Admin from "./pages/Admin/Admin";

import Register from "@/pages/Register/Register";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,

    children: [
         { index: true, element: <Home /> },
      { path: "tours", element: <Tours /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
       { path: "admin", element: <Admin /> }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
