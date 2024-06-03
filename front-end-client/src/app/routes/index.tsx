import {
  createBrowserRouter
} from "react-router-dom";
import { Dashboard } from "../pages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>,
    },
    {
      path:"/Login",
      element:<div>Login</div>
    }
]);

export default router;