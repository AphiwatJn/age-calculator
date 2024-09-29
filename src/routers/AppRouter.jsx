import React from "react";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Age_calculator_page from "../pages/age_calculator_page";

const Layout = () => {
  return <Outlet />;
};

function AppRouter() {
  const main = createBrowserRouter([
    {
      path: "/age-calculator",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Age_calculator_page/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={main} />;
}

export default AppRouter;
