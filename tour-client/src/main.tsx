import "leaflet/dist/leaflet.css";

import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/layout.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "@/pages/Home/Home";
import Tours from "./pages/Tours/Tours";
import Errorpage from "./pages/ErrorPage";
// import Admin from "./pages/Admin/Admin";

import Register from "@/pages/Register/Register";
import Login from "./pages/Login/Login";
import GuideApplyIntro from "./pages/guides/apply/GuideApplyIntro";
import GuideApplyForm from "./pages/guides/apply/GuideApplyForm";
import AdminGuideApplications from "./pages/Admin/AdminGuideApplication";

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
   
        { path: "/guides/apply", element: <GuideApplyIntro /> }, 
        {path: "/guides/apply/form",element: <GuideApplyForm />},
        {path: "/admin/guideApp",element: <AdminGuideApplications />,
},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
