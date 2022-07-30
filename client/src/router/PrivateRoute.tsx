import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoute = () => {
  /**
   * A private route is a route that is only accessible to authenticated users.
   */
  const auth = useAuth();

  if (auth === null || auth === undefined) {
    return null;
  }

  /**
   * if the user is authenticated, shows the rest of the page
   * else go to login page
   */

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
