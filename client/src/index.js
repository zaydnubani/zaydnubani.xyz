import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Landing from './pages/Landing'
import Music from './pages/Music'
import Experience from './pages/Experience'
import Mailer from './pages/components/Mailer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/music",
    element: <Music/>,
  },
  {
    path: "/experience",
    element: <Experience/>,
  },
  {
    path: "/contact",
    element: <Mailer/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);