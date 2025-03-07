import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Product";
import User from "./pages/User";
import Login from "./pages/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/products/:id",
    element: <Products />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;
