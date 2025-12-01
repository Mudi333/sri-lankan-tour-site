import "leaflet/dist/leaflet.css";

import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/layout.css";
import "leaflet/dist/leaflet.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "@/pages/Home/Home";
import Tours from "./pages/Tours/TourDetailsPage";
import Errorpage from "./pages/ErrorPage";
// import Admin from "./pages/Admin/Admin";

import Register from "@/pages/Register/Register";
import Login from "./pages/Login/Login";
import GuideApplyIntro from "./pages/guides/apply/GuideApplyIntro";
import GuideApplyForm from "./pages/guides/apply/GuideApplyForm";
// import AdminGuideApplications from "./pages/Admin/AdminGuideApplication";
import FamilyTourPage from "./pages/Tours/TourPages/Family/FamilyTourPage";
import SoloTourPage from "./pages/Tours/TourPages/Solo/SoloTourPage";
import CoupleTourPage from "./pages/Tours/TourPages/Couple/CoupleTourPage";
import GroupTourPage from "./pages/Tours/TourPages/Group/GroupTourPage";
import TourDetailsPage from "./pages/Tours/TourDetailsPage"
import Contact from "./pages/Contact/Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,

    children: [
      { index: true, element: <Home /> },
   
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      { path: "/guides/apply", element: <GuideApplyIntro /> },
      { path: "/guides/apply/form", element: <GuideApplyForm /> },
      // { path: "/admin/guideApp", element: <AdminGuideApplications /> },


      { path: "/tours/family", element: <FamilyTourPage /> },
   { path: "tours/couple", element: <CoupleTourPage /> },
      { path: "/tours/solo", element: <SoloTourPage /> },
      { path: "/tours/group", element: <GroupTourPage /> },
       { path: "/tours", element: <TourDetailsPage /> },
        { path: "/contact", element: <Contact /> },

      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);



