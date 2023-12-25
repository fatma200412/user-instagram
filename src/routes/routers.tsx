import NoPage from "../pages/noPage";
import Home from "../pages/users/home";
import Login from "../pages/users/login";
import Register from "../pages/users/register";
import UsersRoot from "../pages/users/usersRoot";

export const routers = [
  {
    path: "/",
    element: <UsersRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
];
