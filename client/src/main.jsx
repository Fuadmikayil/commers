import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "en");
}
if (!localStorage.getItem("favorites")) {
  localStorage.setItem("favorites", "[]");
}
if (!localStorage.getItem("isDarkMode")) {
  localStorage.setItem("isDarkMode", "false");
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
