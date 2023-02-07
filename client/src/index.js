import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Landing from './pages/landing/Landing'
import Experience from "./pages/experience/experience"
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/experience",
    element: <Experience/>
  },
  {
    path: "/portfolio",
    element: <Portfolio/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);