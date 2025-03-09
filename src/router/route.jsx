import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "../auth/sign-in";
import App from "../App";
import Home from "../features/Home";
import Dashboard from "../features/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
