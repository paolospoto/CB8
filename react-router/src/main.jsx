import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./pages/error/Error";

import "./index.css";

import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
