import { createBrowserRouter } from "react-router-dom";
import { App } from '../App.tsx';
import { ErrorPage } from '../views/ErrorPage.tsx';
import Layout from '../Layout.tsx';
import { EditItem } from "../views/EditItem.tsx";

export const routeUrls = {
  home: '/',
  editItem: "/edit-item",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routeUrls.home,
        element: <App />,
      },
      {
        path: routeUrls.editItem,
        element: <EditItem />,
      },
    ],
  },
]);
