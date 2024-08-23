import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/fragments/DashboardPage";
import CustomersPage from "./pages/fragments/CustomersPage";
import NotFoundPage from "./pages/notFound";
import CustomerDetailPage from "./pages/fragments/CustomerDetailPage";
import { Provider } from "react-redux";
import store from "./state/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
      {
        path: "customers/:customerName",
        element: <CustomerDetailPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap RouterProvider with Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
