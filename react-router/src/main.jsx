import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./routes/Page404";
import Homepage from "./routes/homepage";
import "./index.css";
import Product from "./routes/product";
import Contacts from "./routes/contacts";
import About from "./routes/about";

const router = createBrowserRouter([
  {
    path: "/", // Rotta statica
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "/contacts", // Rotta statica
    element: <Contacts />,
    errorElement: <Page404 />,
  },
  {
    path: "/about", // Rotta statica
    element: <About />,
    errorElement: <Page404 />,
  },
  {
    path: "products/:productId", // Rotta dinamica
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
