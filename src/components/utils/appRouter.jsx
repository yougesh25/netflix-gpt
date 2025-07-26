import { createBrowserRouter } from "react-router-dom";
import Browse from "../Browse";
import { RouterProvider } from "react-router-dom";
import Login from "../Login";

const AppRouter = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default AppRouter;
