import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Statistics from "./components/Statistics";
import JobDetails from "./components/JobDetails";
import getJobDetails from "./components/loader/getJobDetails";
import AppliedJobs from "./components/AppliedJobs";
import Blogs from "./components/Blogs";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("featuredJobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "job/:id",
        element: <JobDetails />,
        loader: getJobDetails,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch("/featuredJobs.json"),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
