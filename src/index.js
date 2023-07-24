import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/3_Home/Home";
import Watches from "./components/4_Watch/Watches";
import Mens from "./components/5_Men/Mens";
import Womens from "./components/6_Women/Womens";
import Kid from "./components/7_Kid/Kid";
import Smart from "./components/8_Smart/Smart";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Construction from "./Construction";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watches",
        element: <Watches />,
      },
      {
        path: "mens",
        element: <Mens />,
      },
      {
        path: "womens",
        element: <Womens />,
      },
      {
        path: "kid",
        element: <Kid />,
      },
      {
        path: "smart",
        element: <Smart />,
      },
      {
        path: "profile",
        element: <Construction />,
      },
      {
        path: "cart",
        element: <Construction />,
      },
      {
        path: "wishlist",
        element: <Construction />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();
